const { GraphQLID } = require('graphql');
const { CommentType } = require('../../types');
const { GetComment } = require('./resolvers');

module.exports = {
  name: 'GetPosts',
  type: CommentType,
  args: { id: { type: GraphQLID } },
  resolve: GetComment
};
