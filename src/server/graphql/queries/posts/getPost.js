const { GraphQLID } = require('graphql');
const { PostType } = require('../../types');
const { GetPost } = require('./resolvers');

module.exports = {
  name: 'GetPost',
  type: PostType,
  args: { id: { type: GraphQLID } },
  resolve: GetPost
};
