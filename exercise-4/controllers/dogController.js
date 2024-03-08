/** @format */

'use strict';
const Models = require('../models');
const { fetchDogBreeds } = require('./apiController');
const DogModel = require('../models/dog');

const getDogs = async (req, res) => {
  try {
    const breedNames = await fetchDogBreeds();
    const dogs = await DogModel.find({});
    res.status(200).json({ breedNames, dogs });
  } catch (err) {
    console.error('Error fetching dogs:', err);
    res.status(500).json({ error: err.message });
  }
};

const createDog = (data, res) => {
  new DogModel(data)
    .save()
    .then((data) => res.status(200).json({ result: 200, data: data }))
    .catch((err) => {
      console.error(err);
      res.status(500).json({ result: 500, error: err.message });
    });
};

const updateDog = (req, res) => {
  DogModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => res.status(200).json({ result: 200, data: data }))
    .catch((err) => {
      console.error(err);
      res.status(500).json({ result: 500, error: err.message });
    });
};

const deleteDog = (req, res) => {
  DogModel.findByIdAndDelete(req.params.id)
    .then((data) => res.status(200).json({ result: 200, data: data }))
    .catch((err) => {
      console.error(err);
      res.status(500).json({ result: 500, error: err.message });
    });
};

module.exports = {
  getDogs,
  createDog,
  updateDog,
  deleteDog,
};
