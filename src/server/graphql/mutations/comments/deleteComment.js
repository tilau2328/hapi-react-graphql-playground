const { GraphQLID, GraphQLBoolean } = require('graphql');
const { DeleteComment } = require('./resolvers');

module.exports = {
  name: 'DeleteComment',
  type: GraphQLBoolean,
  args: { id: { type: GraphQLID } },
  resolve: DeleteComment
}
