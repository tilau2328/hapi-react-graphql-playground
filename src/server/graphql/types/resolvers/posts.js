const { findUser } = require('../../../controllers/users');
const { findRoom } = require('../../../controllers/rooms');
const { listFilesById } = require('../../../controllers/files');
const { listVotesById } = require('../../../controllers/votes');
const { listCommentsById } = require('../../../controllers/comments');

const getPostAuthor = function(source){
  return new Promise((resolve, reject) => {
    findUser(source.author, (err, user) => {
      err ? reject(err) : resolve(user);
    });
  });
}

const getPostRoom = function(source){
  return new Promise((resolve, reject) => {
    findRoom(source.room, (err, room) => {
      err ? reject(err) : resolve(room);
    });
  });
}

const getPostFiles = function(source){
  return new Promise((resolve, reject) => {
    listFilesById(source.files, (err, files) => {
      err ? reject(err) : resolve(files);
    });
  });
}

const getPostComments = function(source){
  return new Promise((resolve, reject) => {
    listCommentsById(source.comments, (err, comments) => {
      err ? reject(err) : resolve(comments);
    });
  });
}

const getPostVotes = function(source){
  return new Promise((resolve, reject) => {
    listVotesById(source.votes, (err, votes) => {
      err ? reject(err) : resolve(votes);
    });
  });
}

module.exports = {
  getPostAuthor,
  getPostRoom,
  getPostFiles,
  getPostComments,
  getPostVotes
}
