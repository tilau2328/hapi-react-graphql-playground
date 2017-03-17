const { GraphQLList } = require('graphql');
const { FileType } = require('../../types');
const { listFiles } = require('../../../controllers/files');

const resolve = function(){
  return new Promise((resolve, reject) => {
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
