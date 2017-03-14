const { GraphQLObjectType, GraphQLID } = require('graphql');
const users = require('./users');
const files = require('./files');
const rooms = require('./rooms');
const posts = require('./posts');
const comments = require('./comments');

let fields = {};
Object.assign(fields, comments);
Object.assign(fields, posts);
Object.assign(fields, rooms);
Object.assign(fields, files);
Object.assign(fields, users);

module.exports = new GraphQLObjectType({
  name: 'Query',
  fields: () => fields
});
