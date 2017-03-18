const { GraphQLID, GraphQLBoolean } = require('graphql');
const { DeleteRoom } = require('./resolvers');

module.exports = {
  name: 'DeleteRoom',
  type: GraphQLBoolean,
  args: { id: { type: GraphQLID } },
  resolve: DeleteRoom
}
