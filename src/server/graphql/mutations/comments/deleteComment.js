const { GraphQLID, GraphQLBoolean } = require('graphql');
const { deleteComment } = require('../../../controllers/comments');

const resolve = function(source, { id }){
  return new Promise((resolve, reject) => {
    deleteComment(id, (err, success) => {
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
