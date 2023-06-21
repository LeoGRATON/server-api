const client = require("../service/dataBase");
const bcrypt = require('bcrypt');

class AppUser {
    static async createAdmin(adminData) {
        const { firstname, lastname, email, password } = adminData;
        const hashedPassword = await bcrypt.hash(password, 10); // Hashage du mot de passe
        const query = 'INSERT INTO app_admin (firstname, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING *';
        const values = [firstname, lastname, email, hashedPassword];
      
        try {
          const result = await client.query(query, values);
          return result.rows[0];
        } catch (error) {
          throw error;
        }
      }
      
      static async findAdminByEmail(email) {
        const query = 'SELECT * FROM app_admin WHERE email = $1';
        const values = [email];
      
        try {
          const result = await client.query(query, values);
          const admin = result.rows[0];
          return admin;
        } catch (error) {
          throw error;
        }
      }
      
      static async comparePassword(password, hashedPassword) {
        const passwordMatch = await bcrypt.compare(password, hashedPassword);
        return passwordMatch;
      }
  }
  
  module.exports = AppUser;