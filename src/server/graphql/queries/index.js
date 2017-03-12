const { GraphQLObjectType, GraphQLID } = require('graphql');
const user = require('./user');

module.exports = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    user
  })
});
