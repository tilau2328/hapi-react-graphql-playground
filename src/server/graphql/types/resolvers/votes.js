const { findUser } = require('../../../controllers/users');

const getVoteAuthor = function(source){
  return new Promise((resolve, reject) => {
    findUser(source.author, (err, user) => {
      err ? reject(err) : resolve(user);
    });
  });
}

module.exports = {
  getVoteAuthor
}
