const { GraphQLID } = require('graphql');
const { FileType } = require('../../types');
const { findFile } = require('../../../controllers/files');

const resolve = function(source, { id }){
  return new Promise((resolve, reject) => {
    findFile(id, (err, file) => {
      err ? reject(err) : resolve(file);
    });
  });
}

module.exports = {
  name: 'GetFile',
  type: FileType,
  args: {
    id: { type: GraphQLID }
  },
  resolve
};
