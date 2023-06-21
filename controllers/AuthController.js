const jwt = require('jsonwebtoken');
const AppUser = require('../models/AppUser');

class AuthController {
  static async login(req, res) {
    const { email, password } = req.body;

    try {
      const admin = await AppUser.findAdminByEmail(email);

      if (!admin) {
        return res.status(401).json({ message: 'Votre email ou votre mot de passe est faux' });
      }

      const passwordMatch = await AppUser.comparePassword(password, admin.password);

      if (!passwordMatch) {
        return res.status(401).json({ message: 'Votre email ou votre mot de passe est faux' });
      }

      // Authentification réussie
      const token = jwt.sign({ userId: admin.id }, process.env.SECRET_KEY, { expiresIn: '24h' });

      res.json({ message: 'Authentification réussie', token });
    } catch (error) {
      res.status(500).json({ message: 'Une erreur est survenue lors de l\'authentification', token });
    }
  }
}

module.exports = AuthController;