const { GraphQLList } = require('graphql');
const { CommentType } = require('../../types');
const { listComments } = require('../../../controllers/comments');

const resolve = function(){
  return new Promise((resolve, reject) => {
    listComments((err, comment) => {
      err ? reject(err) : resolve(comment);
    });
  });
}

module.exports = {
  name: 'GetPosts',
  type: new GraphQLList(CommentType),
  resolve
};
