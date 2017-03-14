const { GraphQLString } = require('graphql');
const { UserType } = require('../../types');
const { signIn } = require('../../../controllers/users');

const resolve = function(source, args, context, info){
  console.log(source, args, context, info)
  return Promise((resolve, reject) => {
    signIn((err, comment) => {
      err ? reject(err) : resolve(comment);
    });
  });
}

module.exports = {
  name: 'SignUp',
  type: UserType,
  args: {
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  },
  resolve
}
