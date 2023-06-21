const express = require("express");
const router = express.Router();
const worksController = require('../controllers/worksController')
const blogsController = require('../controllers/blogsController')
const AuthController = require('../controllers/AuthController')
const verifyToken = require('../middlewares/verifyToken');
const contactController = require("../controllers/contactController");

router.get('/works', worksController.showAll);
router.post('/works', verifyToken, worksController.createOne)
router.delete('/works/:id', verifyToken, worksController.deleteOne);
router.patch('/works/:id/likes', worksController.updateLikesController);

router.get('/blogs', blogsController.getAllBlogs)
router.post('/blogs', verifyToken, blogsController.addBlog)
router.delete('/blogs/:id', verifyToken, blogsController.deleteBlog)

router.post('/contact', contactController.addContact)

router.post('/login', AuthController.login)
  
module.exports = router;