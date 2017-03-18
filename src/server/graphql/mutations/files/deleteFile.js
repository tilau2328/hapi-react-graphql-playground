const { GraphQLID, GraphQLBoolean } = require('graphql');
const { DeleteFile } = require('./resolvers');

module.exports = {
  name: 'DeleteFile',
  type: GraphQLBoolean,
  args: { id: { type: GraphQLID } },
  resolve: DeleteFile
}
