const User = require('../models/user');

const findUser = function(id, callback){
    User.findById(id, (err, user) => {
      err ? callback(err) : callback(null, user);
    });
}

const listUsers = function(callback){
  User.find({}, (err, users) => {
    err ? callback(err) : callback(null, users);
  });
}

const createUser = function(username, email, password, callback){
  const new_user = new User({ username, email, password });
  new_user.save((err, user) => {
    err ? callback(err) : callback(null, user);
  });
}

const editUser = function(id, callback){
  findUser(id, (err, user) => {
    if(err){ callback(err); }
    // TODO: edit user
    user.save((err, user) => {
      err ? callback(err) : callback(null, user);
    });
  });
}

const deleteUser = function(id, callback){
  User.findByIdAndRemove(id, (err, user) => {
    err ? callback(err) : callback(null, user);
  });
}

module.exports = {
  findUser,
  listUsers,
  createUser,
  editUser,
  deleteUser
};
