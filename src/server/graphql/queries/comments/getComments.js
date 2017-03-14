const { GraphQLID } = require('graphql');
const { CommentType } = require('../../types');
const { listComments } = require('../../../controllers/comment');

const resolve = function(source, args, context, info){
  console.log(source, args, context, info);
  return Promise((resolve, reject) => {
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
