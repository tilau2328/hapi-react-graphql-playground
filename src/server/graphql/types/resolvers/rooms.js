const { listUsersById } = require('../../../controllers/users');
const { listPostsById } = require('../../../controllers/posts');
const { listFilesById } = require('../../../controllers/files');

const getRoomAdmins = function(source){
  return new Promise((resolve, reject) => {
    listUsersById(source.admins, (err, users) => {
      err ? reject(err) : resolve(users);
    });
  });
}

const getRoomModerators = function(source){
  return new Promise((resolve, reject) => {
    listUsersById(source.moderators, (err, users) => {
      err ? reject(err) : resolve(users);
    });
  });
}

const getRoomMembers = function(source){
  return new Promise((resolve, reject) => {
    listUsersById(source.members, (err, users) => {
      err ? reject(err) : resolve(users);
    });
  });
}

const getRoomFiles = function(source){
  return new Promise((resolve, reject) => {
    listCommentsById(source.files, (err, files) => {
      err ? reject(err) : resolve(files);
    });
  });
}

const getRoomPosts = function(source){
  return new Promise((resolve, reject) => {
    listPostsById(source.posts, (err, posts) => {
      err ? reject(err) : resolve(posts);
    });
  });
}

module.exports = {
  getRoomAdmins,
  getRoomModerators,
  getRoomMembers,
  getRoomFiles,
  getRoomPosts
}
