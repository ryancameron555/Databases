/** @format */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postsSchema = new Schema(
  {
    title: { type: String, trim: true, required: true },
    content: { type: String, trim: true, required: true },
    emailId: { type: String, trim: true, required: true, unique: true },
    image: { type: Buffer },
  },
  { timestamps: true }
);

// checked, completion receipt for exercise 2

module.exports = mongoose.model('posts', postsSchema);
