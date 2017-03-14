const { GraphQLID, GraphQLString } = require('graphql');
const { CommentType } = require('../../types');
const { createComment } = require('../../../controllers/comments');

const resolve = function(source, args, context, info){
  console.log(source, args, context, info);
  return Promise((resolve, reject) => {
    createComment((err, comment) => {
      err ? reject(err) : resolve(comment);
    });
  });
}

module.exports = {
  name: 'CreateComment',
  type: CommentType,
  args: {
    text: { type: GraphQLString },
    author: { type: GraphQLID },
    post: { type: GraphQLID },
    file: { type: GraphQLID }
  },
  resolve
}
