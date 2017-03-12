const { GraphQLObjectType } = require('graphql');
const signUp = require('./signup');
const signIn = require('./signin');

module.exports = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    signUp,
    signIn
  })
});
