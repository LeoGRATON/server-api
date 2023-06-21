const Contact = require("../models/Contact");
const nodemailer = require('nodemailer');
require('dotenv').config();

// Configuration du transporteur Nodemailer pour Gmail
const transporter = nodemailer.createTransport({
    host: 'nubie.o2switch.net',
    port: 465,
    secure: true,
    auth: {
      user: 'noreply@leo-graton.fr',
      pass: process.env.MAIL_PASSWORD,
    },
  });

const contactController = {
  async addContact(req, res, ) {
    try {
      const contact = await Contact.addContact(req.body);
      
      // Envoi de l'e-mail
      const mailOptions = {
        from: 'noreply@leo-graton.fr',
        to: 'contact@leo-graton.fr', // Remplacez par l'adresse e-mail de destination
        subject: 'Nouveau contact',
        text: `
          Nouveau contact ajouté :
          Nom : ${contact.nom}
          Prénom : ${contact.prenom}
          Email : ${contact.email}
          Entreprise : ${contact.nom_entreprise}
          Sujet : ${contact.subject}
          Message : ${contact.message}
        `,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
        } else {
          console.log('E-mail envoyé avec succès !');
        }
      });

      res.status(201).json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },
};

module.exports = contactController;