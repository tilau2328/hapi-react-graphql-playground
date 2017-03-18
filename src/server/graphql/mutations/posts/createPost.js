const { GraphQLID, GraphQLString } = require('graphql');
const { PostType } = require('../../types');
const { CreatePost } = require('./resolvers');

module.exports = {
  name: 'CreatePost',
  type: PostType,
  args: {
    text: { type: GraphQLString },
    author: { type: GraphQLID },
    room: { type: GraphQLID }
  },
  resolve: CreatePost
}
