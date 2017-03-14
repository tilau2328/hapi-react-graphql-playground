const { GraphQLObjectType } = require('graphql');
const users = require('./users');
const files = require('./files');
const posts = require('./posts');
const rooms = require('./rooms');
const comments = require('./comments');

let fields = {};
Object.assign(fields, users);
Object.assign(fields, files);
Object.assign(fields, posts);
Object.assign(fields, rooms);
Object.assign(fields, comments);

module.exports = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => fields
});
