/** @format */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likesSchema = new Schema(
  {
    username: { type: String, trim: true, required: true },
    likeCount: { type: String, trim: true, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('likes', likesSchema);
