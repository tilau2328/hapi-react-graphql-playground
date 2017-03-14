const { GraphQLID } = require('graphql');
const { PostType } = require('../../types');
const { listPosts } = require('../../../controllers/posts');

const resolve = function(source, args, context, info){
  console.log(source, args, context, info);
  return Promise((resolve, reject) => {
    listPosts((err, posts) => {
      err ? reject(err) : resolve(posts);
    });
  });
}

module.exports = {
  name: 'GetPosts',
  type: new GraphQLList(PostType),
  resolve
};
