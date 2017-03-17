const { GraphQLID, GraphQLBoolean } = require('graphql');
const { deleteFile } = require('../../../controllers/files');

const resolve = function(source, { id }){
  return new Promise((resolve, reject) => {
    deleteFile(id, (err, comment) => {
      err ? reject(err) : resolve(comment);
    });
  });
}

module.exports = {
  name: 'DeleteFile',
  type: GraphQLBoolean,
  args: {
    id: { type: GraphQLID }
  },
  resolve
}
