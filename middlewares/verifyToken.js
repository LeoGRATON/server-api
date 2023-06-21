require("dotenv").config();
const jwt = require("jsonwebtoken");

function verifyToken(request, response, next) {
  const authHeader = request.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return response.status(401).json({ error: "Unauthorized" });
  }
  jwt.verify(token, process.env.SECRET_KEY, (error, user) => {
    if (error) {
      if (error.name === "TokenExpiredError") {
        return response.status(401).json({ error: "Token expired" });
      } else {
        return response.status(403).json({ error: "Forbidden" });
      }
    }
    request.user = user;
    next();
  });
}

module.exports = verifyToken;