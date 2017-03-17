const { GraphQLID, GraphQLBoolean } = require('graphql');
const { deletePost } = require('../../../controllers/posts');

const resolve = function(source, { id }){
  return new Promise((resolve, reject) => {
    deletePost(id, (err, success) => {
      err ? reject(err) : resolve(success);
    });
  });
}

module.exports = {
  name: 'DeletePost',
  type: GraphQLBoolean,
  args: {
    id: { type: GraphQLID }
  },
  resolve
}
