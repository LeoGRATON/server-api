const client = require("../service/dataBase");

class Works {
    // Méthode statique pour récupérer tous les travaux
    static async findAll() {
      try {
        const result = await client.query('SELECT * FROM works');
        return result.rows;
      } catch (err) {
        throw err;
      }
    }
  
    // Méthode statique pour ajouter un travail
    static async addWork(works) {
      const {
        titre,
        description,
        challenge,
        goal,
        result,
        img_maquette,
        img_ref,
        likes,
        couleurs,
        typo1,
        typo2,
        timeline,
        url,
        website,
        category,
      } = works;
      try {
        const resultOne = await client.query(
          'INSERT INTO works (titre, description, challenge, goal, result, img_maquette, img_ref, likes, couleurs, typo1, typo2, timeline, url, website, category) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *',
          [
            titre,
            description,
            challenge,
            goal,
            result,
            img_maquette,
            img_ref,
            likes,
            couleurs,
            typo1,
            typo2,
            timeline,
            url,
            website,
            category,
          ]
        );
        return resultOne.rows[0];
      } catch (err) {
        throw err;
      }
    }
  
    // Méthode statique pour supprimer un travail par son ID
    static async deleteWork(id) {
      try {
        const result = await client.query('DELETE FROM works WHERE id = $1 RETURNING *', [id]);
        return result.rows[0];
      } catch (err) {
        throw err;
      }
    }
    static async updateLikes(id, updatedLikes) {
      try {
        const result = await client.query('UPDATE works SET likes=$1 WHERE id=$2 RETURNING *',[updatedLikes, id]);
        console.log(result)
        return result.rows[0];
      }catch (err) {
      throw err;
    }
  }
  }
  
  module.exports = Works;