const { GraphQLString } = require('graphql');
const { signIn } = require('../../../controllers/users');

const resolve = function(source, { username, password }){
  console.log(source, context, info)
  return new Promise((resolve, reject) => {
    signIn(username, password, (err, token) => {
      err ? reject(err) : resolve(token);
    });
  });
}

module.exports = {
  name: 'SignUp',
  type: GraphQLString,
  args: {
    username: { type: GraphQLString },
    password: { type: GraphQLString }
  },
  resolve
}
