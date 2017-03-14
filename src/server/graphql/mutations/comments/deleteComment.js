const { GraphQLID, GraphQLBoolean } = require('graphql');
const { deleteComment } = require('../../../controllers/comments');

const resolve = function(source, args, context, info){
  console.log(source, args, context, info);
  return Promise((resolve, reject) => {
    deleteComment((err, success) => {
      err ? reject(err) : resolve(success);
    });
  });
}

module.exports = {
  name: 'DeleteComment',
  type: GraphQLBoolean,
  args: {
    id: { type: GraphQLID }
  },
  resolve
}
