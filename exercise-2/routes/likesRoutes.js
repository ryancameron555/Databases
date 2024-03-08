/** @format */

let express = require('express');
let router = express.Router();
let Controllers = require('../controllers');

// index.js// Adds a GET route to return all users
router.get('/', (req, res) => {
  Controllers.likesController.getLikes(res);
});

// Adds a POST route to create a new user
router.post('/create', (req, res) => {
  Controllers.likesController.createLikes(req.body, res);
});

router.put('/:id', (req, res) => {
  Controllers.likesController.updateLikes(req, res);
});

router.delete('/:id', (req, res) => {
  Controllers.likesController.deleteLikes(req, res);
});

module.exports = router;
