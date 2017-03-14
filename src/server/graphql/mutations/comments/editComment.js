const { GraphQLID, GraphQLString } = require('graphql');
const { CommentType } = require('../../types');
const { editComment } = require('../../../controllers/comments');

const resolve = function(source, args, context, info){
  console.log(source, args, context, info);
  return Promise((resolve, reject) => {
    editComment((err, comment) => {
      err ? reject(err) : resolve(comment);
    });
  });
}

module.exports = {
  name: 'CreateComment',
  type: CommentType,
  args: {
    id: { type: GraphQLID },
    text: { type: GraphQLString }
  },
  resolve
}
