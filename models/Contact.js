const client = require("../service/dataBase");

class Contact {
  
    // Méthode statique pour ajouter un contact
    static async addContact(contact) {
      const {
        nom,
        prenom,
        email,
        nom_entreprise,
        subject,
        message
      } = contact;
      try {
        const result = await client.query(
          'INSERT INTO contact_leo (nom, prenom, email, nom_entreprise, subject, message) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
          [
            nom,
            prenom,
            email,
            nom_entreprise,
            subject,
            message
          ]
        );
        return result.rows[0];
      } catch (err) {
        throw err;
      }
    }
  }
  
  module.exports = Contact;