const { GraphQLID } = require('graphql');
const { CommentType } = require('../../types');
const { findComment } = require('../../../controllers/comments');

const resolve = function(source, { id }){ 
  return new Promise((resolve, reject) => {
    findComment(id, (err, comment) => {
      err ? reject(err) : resolve(comment);
    });
  });
}

module.exports = {
  name: 'GetPosts',
  type: CommentType,
  args: {
    id: { type: GraphQLID }
  },
  resolve
};
