const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

function validateData(data, check_email, callback){
  const email = data.email;
  const username = data.username;
  const password = data.password;

  if(check_email && (!email || !EMAIL_REGEX.exec(email))){
    return callback('Invalid email' );
  }

  if(!username || !password.trim()){
    return callback('Invalid username');
  }

  if(!password || !password.trim()){
    return callback('Invalid password');
  }

  callback(null);
}

const findUser = function(id, callback){
  User.findById(id, (err, user) => {
    err ? callback(err) : callback(null, user);
  });
}

const findUserByUsername = function(username, callback){
  User.findOne({ username }, (err, user) => {
    err ? callback(err) : callback(null, user);
  });
}

const findUserFromToken = function(token, callback){
  const decoded = jwt.decode(token, config.secret);
  findUser(decoded.sub, callback);
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
    if(err) { return callback(err); }
    console.log(user);
    callback(null, true);
  });
}

const signUp = function(username, email, password, callback){
  validateData({ username, email, password }, true, (err) => {
    if(err) return callback(err);
    findUserByUsername(username, (err, user) => {
      if(err){ return callback(err); }
      if(user){ return callback('Existing User'); }
      createUser(username, email, password, (err, user) => {
        if (err) { return callback(err); }
        return callback(null, tokenForUser(user));
      });
    });
  });
}

const signIn = function(username, password, callback){
  validateData({ username, password }, false, (err) => {
    if(err) return callback(err);
    findUserByUsername(username, (err, user) => {
      if(err){ return callback(err); }
      if(!user){ return callback('Unexisting User'); }
      user.comparePassword(password, (err, isMatch) => {
        if (err) { return callback(err); }
        if (!isMatch) { return callback('Invalid credentials.'); }
        return callback(null, tokenForUser(user));
      });
    });
  });
}

const listUsersById = function(user_ids, callback){
  var users = [];
  user_ids.map(id => {
    User.findById(id , (err, user) => {
      if(err) { callback(err); }
      users.push(user);
      if(users.length === user_ids.length) { callback(null, users); }
    });
  });
}

module.exports = {
  findUser,
  listUsers,
  createUser,
  editUser,
  deleteUser,
  findUserFromToken,
  signUp,
  signIn,
  listUsersById
};
