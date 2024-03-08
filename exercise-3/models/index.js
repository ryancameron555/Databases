/** @format */

'use strict';
//require the model
const User = require('./user');
const Post = require('./post');
const Like = require('./like');
const Comment = require('./comment');

async function init() {
  await User.sync();
  await Post.sync();
  await Like.sync();
  await Comment.sync();
  // sync the model
  // also sync any extra models here
}

init();

module.exports = {
  User,
  Post,
  Like,
  Comment,
  // export the model
  // also export any extra models here
};
