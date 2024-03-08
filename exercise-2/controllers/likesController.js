/** @format */

'use strict';
let Models = require('../models'); // matches index.js

const getLikes = (res) => {
  // finds all users
  Models.Likes.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createLikes = (data, res) => {
  // creates a new user using JSON data POSTed in request body
  console.log(data);
  new Models.Likes(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateLikes = (req, res) => {
  // updates the user matching the ID from the param using JSON data POSTed in request body
  console.log(req.body);
  Models.Likes.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteLikes = (req, res) => {
  // deletes the user matching the ID from the param
  Models.Likes.findByIdAndDelete(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// ++ Test updating and deleting a user using Postman

module.exports = {
  getLikes,
  createLikes,
  updateLikes,
  deleteLikes,
};
