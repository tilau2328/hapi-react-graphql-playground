const { findFile } = require('../../../controllers/files');
const { findPost } = require('../../../controllers/posts');
const { findUser } = require('../../../controllers/users');
const { listVotesById } = require('../../../controllers/votes');

const getCommentAuthor = function(source){
  return new Promise((resolve, reject) => {
    findUser(source.author, (err, user) => {
      err ? reject(err) : resolve(user);
    });
  });
  const { listVotesById } = require('../../../controllers/votes');
}

const getCommentPost = function(source){
  return new Promise((resolve, reject) => {
    findPost(source.post, (err, post) => {
      err ? reject(err) : resolve(post);
    });
  });
}

const getCommentFile = function(source){
  return new Promise((resolve, reject) => {
    findFile(source.file, (err, file) => {
      err ? reject(err) : resolve(file);
    });
  });
}

const getCommentVotes = function(source){
  return new Promise((resolve, reject) => {
    listVotesById(source.votes, (err, votes) => {
      err ? reject(err) : resolve(votes);
    });
  });
}


module.exports = {
  getCommentAuthor,
  getCommentPost,
  getCommentFile,
  getCommentVotes
}
