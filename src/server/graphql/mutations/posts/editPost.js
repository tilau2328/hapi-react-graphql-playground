const { GraphQLString, GraphQLID } = require('graphql');
const { PostType } = require('../../types');
const { editPost } = require('../../../controllers/posts');

const resolve = function(source, { id, text }){
  return new Promise((resolve, reject) => {
    editPost(id, { text }, (err, comment) => {
      err ? reject(err) : resolve(comment);
    });
  });
}

module.exports = {
  name: 'CreatePost',
  type: PostType,
  args: {
    id: { type: GraphQLID },
    text: { type: GraphQLString }
  },
  resolve
}
