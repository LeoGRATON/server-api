const Blog = require("../models/Blog");

const blogsController =  {
    async getAllBlogs(req, res, next) {
        try {
            const blogs = await Blog.getAllBlogs();
            res.status(200).json(blogs);
          } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
          }
    },
    async addBlog(req, res, next) {
        try {
            const blog = await Blog.addBlog(req.body);
            res.status(201).json(blog);
          } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
          }
    },
    async deleteBlog(req, res, next) {
        const id = parseInt(req.params.id);
        try {
            const deleted = await Blog.deleteBlog(id);
            if (deleted) {
            res.sendStatus(204);
            } else {
                res.status(404).json({ message: "Blog not found" });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
    }
    }
}

module.exports = blogsController;