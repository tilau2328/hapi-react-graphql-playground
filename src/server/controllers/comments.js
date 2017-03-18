const { findUser } = require('./users');
const { findPost } = require('./posts');
const { findFile } = require('./files');
const Comment = require('../models/comment');

const findComment = function(id, callback){
  Comment.findById(id, (err, comment) => {
    err ? callback(err) : callback(null, comment);
  });
}

const listComments = function(callback){
  Comment.find({}, (err, comments) => {
    err ? callback(err) : callback(null, comments);
  });
}

const createComment = function(args, callback){
  if(args.file && args.post) { return callback('Comment cannot be from post and file'); }
  findUser(args.author, (err, author) => {
    if(err) { return callback(err); }
    const new_comment = new Comment({ text: args.text, author: args.author });
    if(args.post){
      findPost(args.post, (err, post) => {
        new_comment.post = post.id;
        console.log(new_comment);
        new_comment.save((err, comment) => {
          console.log(err);
          err ? callback(err) : callback(null, comment);
        });
      });
    } else if(args.file) {
      findFile(args.file, (err, file) => {
        new_comment.file = file.id;
        new_comment.save((err, comment) => {
          err ? callback(err) : callback(null, comment);
        });
      });
    } else { return callback('Missing post or file'); }
  });
}

const editComment = function(id, callback){
  findComment(id, (err, comment) => {
    if(err){ callback(err); }
    // TODO: edit user
    comment.save((err, comment) => {
      err ? callback(err) : callback(null, comment);
    });
  });
}

const deleteComment = function(id, callback){
  Comment.findByIdAndRemove(id, (err, comment) => {
    err ? callback(err) : callback(null, comment);
  });
}

const listCommentsById = function(comment_ids, callback){
  var comment_list = [];
  comment_ids.map(({id}) => {
    Comment.findById(id , (err, comment) => {
      if(err) { callback(err); }
      comments.push(comment);
      if(comments.length === comment_ids.length) { callback(null, comments); }
    });
  });
}

module.exports = {
  findComment,
  listComments,
  createComment,
  editComment,
  deleteComment,
  listCommentsById
};
