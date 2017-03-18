const { GraphQLID, GraphQLString } = require('graphql');
const { CommentType } = require('../../types');
const { CreateComment } = require('./resolvers');

module.exports = {
  name: 'CreateComment',
  type: CommentType,
  args: {
    text: { type: GraphQLString },
    author: { type: GraphQLID },
    post: { type: GraphQLID },
    file: { type: GraphQLID }
  },
  resolve: CreateComment
}
