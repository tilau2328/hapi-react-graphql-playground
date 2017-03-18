const { GraphQLID, GraphQLBoolean } = require('graphql');
const { DeleteUser } = require('./resolvers');

module.exports = {
  name: 'DeleteUser',
  type: GraphQLBoolean,
  args: { id: { type: GraphQLID } },
  resolve: DeleteUser
}
