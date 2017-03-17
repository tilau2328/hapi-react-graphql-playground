const { GraphQLString } = require('graphql');
const { FileType } = require('../../types');
const { createFile } = require('../../../controllers/files');

const resolve = function(source, args, context, info){
  console.log(source, args, context, info);
  return new Promise((resolve, reject) => {
    createFile((err, comment) => {
      err ? reject(err) : resolve(comment);
    });
  });
}

module.exports = {
  name: 'AddFile',
  type: FileType,
  args: {

  },
  resolve
}
