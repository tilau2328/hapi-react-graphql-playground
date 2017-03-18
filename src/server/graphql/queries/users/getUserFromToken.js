const { GraphQLString } = require('graphql');
const { UserType } = require('../../types');
const { GetUserFromToken } = require('./resolvers');

module.exports = {
  name: 'GetUserFromToken',
  type: UserType,
  args: { token: { type: GraphQLString } },
  resolve: GetUserFromToken
};
