const { GraphQLID } = require('graphql');
const { FileType } = require('../../types');
const { GetFile } = require('./resolvers');

module.exports = {
  name: 'GetFile',
  type: FileType,
  args: { id: { type: GraphQLID } },
  resolve: GetFile
};
