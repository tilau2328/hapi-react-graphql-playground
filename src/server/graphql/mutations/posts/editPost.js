const { GraphQLID, GraphQLString } = require('graphql');
const { PostType } = require('../../types');
const { editPost } = require('../../../controllers/posts');

const resolve = function(source, args, context, info){
  console.log(source, args, context, info);
  return Promise((resolve, reject) => {
    editPost((err, comment) => {
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
