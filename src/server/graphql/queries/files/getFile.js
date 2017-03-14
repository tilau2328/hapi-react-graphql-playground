const { GraphQLID } = require('graphql');
const { FileType } = require('../../types');
const { findFile } = require('../../../controllers/files');

const resolve = function(source, args, context, info){
  console.log(source, args, context, info);
  return Promise((resolve, reject) => {
    findFile((err, file) => {
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
