const { GraphQLList } = require('graphql');
const { RoomType } = require('../../types');
const { GetRooms } = require('./resolvers');

module.exports = {
  name: 'GetRooms',
  type: new GraphQLList(RoomType),
  resolve: GetRooms
};
