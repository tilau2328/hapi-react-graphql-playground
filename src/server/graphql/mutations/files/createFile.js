const { GraphQLString } = require('graphql');
const { FileType } = require('../../types');
const { CreateFile } = require('./resolvers');

module.exports = {
  name: 'CreateFile',
  type: FileType,
  args: {
    title: { type: GraphQLString }
  },
  resolve: CreateFile
}
