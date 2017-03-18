const { GraphQLList } = require('graphql');
const { UserType } = require('../../types');
const { GetUsers } = require('./resolvers');

module.exports = {
  name: 'GetRooms',
  type: new GraphQLList(UserType),
  resolve: GetUsers
};
