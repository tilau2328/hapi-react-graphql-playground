const { createComment, editComment, deleteComment } = require('../../../controllers/comments');

const CreateComment = function(source, args){
  return new Promise((resolve, reject) => {
    createComment(args, (err, comment) => {
      err ? reject(err) : resolve(comment);
    });
  });
}

const EditComment = function(source, { id, text }){
  return new Promise((resolve, reject) => {
    editComment(id, { text }, (err, comment) => {
      err ? reject(err) : resolve(comment);
    });
  });
}

const DeleteComment = function(source, { id }){
  return new Promise((resolve, reject) => {
    deleteComment(id, (err, success) => {
      err ? reject(err) : resolve(success);
    });
  });
}

module.exports = {
  CreateComment,
  EditComment,
  DeleteComment
};
