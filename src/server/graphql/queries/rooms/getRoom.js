const { GraphQLID } = require('graphql');
const { RoomType } = require('../../types');
const { GetRoom } = require('./resolvers');

module.exports = {
  name: 'GetRoom',
  type: RoomType,
  args: { id: { type: GraphQLID } },
  resolve: GetRoom
};
