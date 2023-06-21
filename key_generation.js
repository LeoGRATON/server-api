const crypto = require('crypto');
const jwt = require('jsonwebtoken');

// Génération de la clé secrète
const generateSecretKey = () => {
  return crypto.randomBytes(32).toString('hex');
};

const secretKey = generateSecretKey();

console.log(secretKey);

// Utilisation de la clé secrète pour signer un JWT
const payload = { username: 'app_admin' };
const token = jwt.sign(payload, secretKey);

// Vérification du JWT en utilisant la clé secrète
jwt.verify(token, secretKey, (err, decoded) => {
  if (err) {
    console.log('JWT invalide');
  } else {
    console.log('JWT valide');
    console.log(decoded);
  }
});