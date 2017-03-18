const { GraphQLID, GraphQLString } = require('graphql');
const { CommentType } = require('../../types');
const { EditComment } = require('./resolvers');

module.exports = {
  name: 'CreateComment',
  type: CommentType,
  args: {
    id: { type: GraphQLID },
    text: { type: GraphQLString }
  },
  resolve: EditComment
}
