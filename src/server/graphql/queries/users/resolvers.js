const { listUsers, findUser, findUserFromToken } = require('../../../controllers/users');

const GetUsers = function(){
  return new Promise((resolve, reject) => {
    listUsers((err, users) => {
      err ? reject(err) : resolve(users);
    });
  });
}

const GetUser = function(source, { id }){
  return new Promise((resolve, reject) => {
    findUser(id, (err, user) => {
      err ? reject(err) : resolve(user);
    });
  });
}

const GetUserFromToken = function(source, { token }){
  return new Promise((resolve, reject) => {
    findUserFromToken(token, (err, user) => {
      err ? reject(err) : resolve(user);
    });
  });
}

module.exports = {
  GetUsers,
  GetUser,
  GetUserFromToken
}
