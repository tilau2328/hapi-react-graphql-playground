const { GraphQLID } = require('graphql');
const { deletePost } = require('../../../controllers/posts');

const resolve = function(source, args, context, info){
  console.log(source, args, context, info);
  return Promise((resolve, reject) => {
    deletePost((err, success) => {
      err ? reject(err) : resolve(success);
    });
  });
}

module.exports = {
  name: 'DeletePost',
  type: GraphQLID,
  args: {
    id: { type: GraphQLID }
  },
  resolve
}
