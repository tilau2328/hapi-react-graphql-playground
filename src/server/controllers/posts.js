const Post = require('../models/post');

const findPost = function(id, callback){
  Post.findById(id, (err, post) => {
    err ? callback(err) : callback(null, post);
  });
}

const listPosts = function(callback){
  Post.find({}, (err, posts) => {
    err ? callback(err) : callback(null, posts);
  });
}

const createPost = function(text, callback){
  const new_post = new Post({ text });
  new_post.save((err, post) => {
    err ? callback(err) : callback(null, post);
  });
}

const editPost = function(id, callback){
  findPost(id, (err, post) => {
    if(err){ callback(err); }
    // TODO: edit user
    post.save((err, post) => {
      err ? callback(err) : callback(null, post);
    });
  });
}

const deletePost = function(id, callback){
  Post.findByIdAndRemove(id, (err, post) => {
    err ? callback(err) : callback(null, post);
  });
}

module.exports = {
  findPost,
  listPosts,
  createPost,
  editPost,
  deletePost
};
