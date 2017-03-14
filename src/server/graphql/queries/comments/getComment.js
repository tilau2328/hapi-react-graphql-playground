const { GraphQLID } = require('graphql');
const { CommentType } = require('../../types');
const { findComment } = require('../../../controllers/comment');

const resolve = function(source, args, context, info){
  console.log(source, args, context, info);
  return Promise((resolve, reject) => {
    findComment((err, comment) => {
      err ? reject(err) : resolve(comment);
    });
  });
}

module.exports = {
  name: 'GetPosts',
  type: new GraphQLList(CommentType),
  args: {
    id: { type: GraphQLID }
  },
  resolve
};
