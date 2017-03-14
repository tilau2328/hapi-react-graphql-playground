const { GraphQLID } = require('graphql');
const { UserType } = require('../../types');
const { findUser } = require('../../../controllers/posts');

const resolve = function(source, args, context, info){
  console.log(source, args, context, info)
  return Promise((resolve, reject) => {
    findUser((err, user) => {
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
