const { GraphQLID } = require('graphql');
const { UserType } = require('../../types');
const { GetUser } = require('./resolvers');

module.exports = {
  name: 'GetUser',
  type: UserType,
  args: { id: { type: GraphQLID } },
  resolve: GetUser
};
