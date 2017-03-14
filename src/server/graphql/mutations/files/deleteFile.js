const { GraphQLID } = require('graphql');
const { deleteFile } = require('../../../controllers/files');

const resolve = function(source, args, context, info){
  console.log(source, args, context, info);
  return Promise((resolve, reject) => {
    deleteFile((err, comment) => {
      err ? reject(err) : resolve(comment);
    });
  });
}

module.exports = {
  name: 'DeleteFile',
  type: GraphQLID,
  args: {
    id: { type: GraphQLID }
  },
  resolve
}
