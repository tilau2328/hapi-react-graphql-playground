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

const createPost = function({ text, author, room }, callback){
  const new_post = new Post({ text, author, room });
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

const listPostsById = function(post_ids, callback){
  var post_list = [];
  post_ids.map(({id}) => {
    Post.findById(id , (err, post) => {
      if(err) { callback(err); }
      posts.push(post);
      if(posts.length === post_ids.length) { callback(null, posts); }
    });
  });
}

module.exports = {
  findPost,
  listPosts,
  createPost,
  editPost,
  deletePost,
  listPostsById
};
