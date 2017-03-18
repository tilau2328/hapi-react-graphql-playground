const { GraphQLString, GraphQLID } = require('graphql');
const { RoomType } = require('../../types');
const { EditRoom } = require('./resolvers');

module.exports = {
  name: 'EditRoom',
  type: RoomType,
  args: {
    id: { type: GraphQLID },
    name: { type: GraphQLString }
  },
  resolve: EditRoom
}
