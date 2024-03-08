/** @format */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogSchema = new Schema(
  {
    breedName: { type: String, trim: true, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Dog', dogSchema);
