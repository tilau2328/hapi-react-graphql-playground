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

const createComment = function(name, callback){
  const new_comment = new Comment({ name });
  new_comment.save((err, comment) => {
    err ? callback(err) : callback(null, comment);
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

module.exports = {
  findComment,
  listComments,
  createComment,
  editComment,
  deleteComment
};
module.exports = {

};
