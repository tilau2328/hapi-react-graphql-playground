const { GraphQLID, GraphQLBoolean } = require('graphql');
const { DeletePost } = require('./resolvers');

module.exports = {
  name: 'DeletePost',
  type: GraphQLBoolean,
  args: { id: { type: GraphQLID } },
  resolve: DeletePost
}
