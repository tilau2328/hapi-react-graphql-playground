const { GraphQLID } = require('graphql');
const { UserType } = require('../../types');
const { EditUser } = require('./resolvers');

module.exports = {
  name: 'EditUser',
  type: UserType,
  args: {
    id: { type: GraphQLID }
  },
  resolve: EditUser
}
