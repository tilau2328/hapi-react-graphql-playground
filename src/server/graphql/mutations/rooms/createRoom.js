const { GraphQLString } = require('graphql');
const { RoomType } = require('../../types');
const { CreateRoom } = require('./resolvers');

module.exports = {
  name: 'CreateRoom',
  type: RoomType,
  args: {
    name: { type: GraphQLString }
  },
  resolve: CreateRoom
}
