const { GraphQLID } = require('graphql');
const { FileType } = require('../../types');
const { editFile } = require('../../../controllers/files');

const resolve = function(source, args, context, info){
  console.log(source, args, context, info);
  return Promise((resolve, reject) => {
    editFile((err, comment) => {
      err ? reject(err) : resolve(comment);
    });
  });
}

module.exports = {
  name: 'EditFile',
  type: FileType,
  args: {
    id: { type: GraphQLID }
  },
  resolve
}
