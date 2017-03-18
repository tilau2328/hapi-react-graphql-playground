const { GraphQLString, GraphQLID } = require('graphql');
const { FileType } = require('../../types');
const { EditFile } = require('./resolvers');

module.exports = {
  name: 'EditFile',
  type: FileType,
  args: {
    id: { type: GraphQLID },
    title: { type: GraphQLString }
  },
  resolve: EditFile
}
