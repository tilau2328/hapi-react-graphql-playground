const { GraphQLID, GraphQLString } = require('graphql');
const { PostType } = require('../../types');
const { createPost } = require('../../../controllers/posts');

const resolve = function(source, args, context, info){
  console.log(source, args, context, info);
  return new Promise((resolve, reject) => {
    createPost((err, comment) => {
      err ? reject(err) : resolve(comment);
    });
  });
}

module.exports = {
  name: 'CreatePost',
  type: PostType,
  args: {
    text: { type: GraphQLString },
    author: { type: GraphQLID },
    room: { type: GraphQLID }
  },
  resolve
}
