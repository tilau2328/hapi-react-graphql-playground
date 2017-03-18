const { GraphQLList } = require('graphql');
const { PostType } = require('../../types');
const { GetPosts } = require('./resolvers');

module.exports = {
  name: 'GetPosts',
  type: new GraphQLList(PostType),
  resolve: GetPosts
};
