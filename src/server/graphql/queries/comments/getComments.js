const { GraphQLList } = require('graphql');
const { CommentType } = require('../../types');
const { GetComments } = require('./resolvers');

module.exports = {
  name: 'GetComments',
  type: new GraphQLList(CommentType),
  resolve: GetComments
};
