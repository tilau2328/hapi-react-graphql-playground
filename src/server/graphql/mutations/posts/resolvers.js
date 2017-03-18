const { createPost, editPost, deletePost } = require('../../../controllers/posts');

const CreatePost = function(source, args){
  return new Promise((resolve, reject) => {
    createPost(args, (err, comment) => {
      err ? reject(err) : resolve(comment);
    });
  });
}

const EditPost = function(source, { id, text }){
  return new Promise((resolve, reject) => {
    editPost(id, { text }, (err, comment) => {
      err ? reject(err) : resolve(comment);
    });
  });
}

const DeletePost = function(source, { id }){
  return new Promise((resolve, reject) => {
    deletePost(id, (err, success) => {
      err ? reject(err) : resolve(success);
    });
  });
}

module.exports = {
  CreatePost,
  EditPost,
  DeletePost
};
