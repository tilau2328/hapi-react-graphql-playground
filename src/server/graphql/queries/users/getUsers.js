const { GraphQLList } = require('graphql');
const { UserType } = require('../../types');
const { GetUsers } = require('./resolvers');

module.exports = {
  name: 'GetUsers',
  type: new GraphQLList(UserType),
  resolve: GetUsers
};
