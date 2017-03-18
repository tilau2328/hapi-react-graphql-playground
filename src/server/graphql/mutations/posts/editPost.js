const { GraphQLString, GraphQLID } = require('graphql');
const { PostType } = require('../../types');
const { EditPost } = require('./resolvers');

module.exports = {
  name: 'CreatePost',
  type: PostType,
  args: {
    id: { type: GraphQLID },
    text: { type: GraphQLString }
  },
  resolve: EditPost
}
