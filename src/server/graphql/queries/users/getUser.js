const { GraphQLID } = require('graphql');
const { UserType } = require('../../types');
const { findUser } = require('../../../controllers/posts');

const resolve = function(source, { id }){
  return new Promise((resolve, reject) => {
    findUser(id, (err, user) => {
      err ? reject(err) : resolve(user);
    });
  });
}

module.exports = {
  name: 'GetUser',
  type: UserType,
  args: {
    id: { type: GraphQLID }
  },
  resolve
};
