const { GraphQLID } = require('graphql');
const { FileType } = require('../../types');
const { listFiles } = require('../../../controllers/files');

const resolve = function(source, args, context, info){
  console.log(source, args, context, info);
  return Promise((resolve, reject) => {
    listFiles((err, files) => {
      err ? reject(err) : resolve(files);
    });
  });
}

module.exports = {
  name: 'GetPosts',
  type: new GraphQLList(FileType),
  resolve
};
