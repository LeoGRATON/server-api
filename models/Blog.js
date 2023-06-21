const client = require("../service/dataBase");

class Blog {
    static async getAllBlogs() {
      try {
        const { rows } = await client.query('SELECT * FROM blog');
        return rows;
      } catch (error) {
        console.error(error);
        return [];
      }
    }
  
    static async addBlog(blog) {
      const { category, titre, text, author, img_ref } = blog;
      const query = 'INSERT INTO blog (category, titre, text, author, img_ref) VALUES ($1, $2, $3, $4, $5) RETURNING *';
      const values = [category, titre, text, author, img_ref];
      try {
        const { rows } = await client.query(query, values);
        return rows[0];
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  
    static async deleteBlog(id) {
      const query = 'DELETE FROM blog WHERE id = $1';
      const values = [id];
      try {
        const { rowCount } = await client.query(query, values);
        return rowCount > 0;
      } catch (error) {
        console.error(error);
        return false;
      }
    }
  }
  
  module.exports = Blog;