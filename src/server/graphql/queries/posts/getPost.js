const { GraphQLID } = require('graphql');
const { PostType } = require('../../types');
const { findPost } = require('../../../controllers/posts');

const resolve = function(source, args, context, info){
  console.log(source, args, context, info);
  return Promise((resolve, reject) => {
    findPost((err, post) => {
      err ? reject(err) : resolve(post);
    });
  });
}

module.exports = {
  name: 'GetPost',
  type: PostType,
  args: {
    id: { type: GraphQLID }
  },
  resolve
};
