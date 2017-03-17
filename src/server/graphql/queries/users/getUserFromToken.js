const { GraphQLString } = require('graphql');
const { UserType } = require('../../types');
const { findUserFromToken } = require('../../../controllers/users');

const resolve = function(source, { token }){
  return new Promise((resolve, reject) => {
    findUserFromToken(token, (err, user) => {
      err ? reject(err) : resolve(user);
    });
  });
}

module.exports = {
  name: 'GetUser',
  type: UserType,
  args: {
    token: { type: GraphQLString }
  },
  resolve
};
