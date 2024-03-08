/** @format */

let express = require('express');
let router = express.Router();
let Controllers = require('../controllers');

// index.js// Adds a GET route to return all users
router.get('/', (req, res) => {
  Controllers.postsController.getPosts(res);
});

// Adds a POST route to create a new user
router.post('/create', (req, res) => {
  Controllers.postsController.createPosts(req.body, res);
});

router.put('/:id', (req, res) => {
  Controllers.postsController.updatePosts(req, res);
});

router.delete('/:id', (req, res) => {
  Controllers.postsController.deletePosts(req, res);
});

module.exports = router;
