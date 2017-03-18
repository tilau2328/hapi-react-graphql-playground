const { findUser } = require('../../../controllers/users');
const { listVotesById } = require('../../../controllers/votes');

const getFileAuthor = function(source){
  return new Promise((resolve, reject) => {
    findUser(source.author, (err, user) => {
      err ? reject(err) : resolve(user);
    });
  });
}

const getFileComments = function(source){
  return new Promise((resolve, reject) => {
    listCommentsById(source.comments, (err, votes) => {
      err ? reject(err) : resolve(votes);
    });
  });
}

const getFileVotes = function(source){
  return new Promise((resolve, reject) => {
    listVotesById(source.votes, (err, votes) => {
      err ? reject(err) : resolve(votes);
    });
  });
}

module.exports = {
  getFileAuthor,
  getFileVotes
}
