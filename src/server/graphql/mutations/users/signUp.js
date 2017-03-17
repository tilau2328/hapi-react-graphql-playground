const { GraphQLString } = require('graphql');
const { signUp } = require('../../../controllers/users');

const resolve = function(source, { username, email, password }){
  return new Promise((resolve, reject) => {
    signUp(username, email, password, (err, token) => {
      err ? reject(err) : resolve(token);
    });
  });
}

module.exports = {
  name: 'SignUp',
  type: GraphQLString,
  args: {
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  },
  resolve
}
