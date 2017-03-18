const { GraphQLList } = require('graphql');
const { FileType } = require('../../types');
const { GetFiles } = require('./resolvers');

module.exports = {
  name: 'GetPosts',
  type: new GraphQLList(FileType),
  resolve: GetFiles
};
