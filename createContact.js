const { Client } = require('pg');
require('dotenv').config();
const fs = require('fs');

// Configurer la connexion à la base de données
const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Se connecter à la base de données
client.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
    return;
  }
  
  console.log('Connecté à la base de données');

  // Lire le contenu du fichier SQL
  const sql = fs.readFileSync('create_contact.sql').toString();

  // Exécuter le script SQL
  client.query(sql, (err) => {
    if (err) {
      console.error('Erreur lors de l\'exécution du script SQL :', err);
      return;
    }

    console.log('Table "contact_leo" créée avec succès');
    client.end();
  });
});