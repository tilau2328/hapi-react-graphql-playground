const { GraphQLList } = require('graphql');
const { PostType } = require('../../types');
const { listPosts } = require('../../../controllers/posts');

const resolve = function(){
  return new Promise((resolve, reject) => {
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
