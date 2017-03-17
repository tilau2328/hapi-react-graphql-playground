const { GraphQLID, GraphQLString } = require('graphql');
const { CommentType } = require('../../types');
const { editComment } = require('../../../controllers/comments');

const resolve = function(source, { id, text }){
  return new Promise((resolve, reject) => {
    editComment(id, { text }, (err, comment) => {
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
