const { GraphQLID, GraphQLString } = require('graphql');
const { RoomType } = require('../../types');
const { CreateRoom } = require('./resolvers');

module.exports = {
  name: 'CreateRoom',
  type: RoomType,
  args: {
    name: { type: GraphQLString },
    creator: { type: GraphQLID }
  },
  resolve: CreateRoom
}
