/** @format */

let express = require('express');
let router = express.Router();
let Controllers = require('../controllers');

// index.js// Adds a GET route to return all users
router.get('/', (req, res) => {
  Controllers.dogController.getDogs(req, res);
});

// router.get('/', (req, res) => {
//   Controllers.dogController.getDogs(res);
// });

// Adds a POST route to create a new user
router.post('/create', (req, res) => {
  Controllers.dogController.createDog(req.body, res);
});

router.put('/:id', (req, res) => {
  Controllers.dogController.updateDog(req, res);
});

router.delete('/:id', (req, res) => {
  Controllers.dogController.deleteDog(req, res);
});

module.exports = router;
