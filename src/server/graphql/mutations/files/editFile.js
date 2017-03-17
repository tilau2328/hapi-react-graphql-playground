const { GraphQLString, GraphQLID } = require('graphql');
const { FileType } = require('../../types');
const { editFile } = require('../../../controllers/files');

const resolve = function(source, { id, title }){
  return new Promise((resolve, reject) => {
    editFile(id, { title }, (err, comment) => {
      err ? reject(err) : resolve(comment);
    });
  });
}

module.exports = {
  name: 'EditFile',
  type: FileType,
  args: {
    id: { type: GraphQLID },
    title: { type: GraphQLString }
  },
  resolve
}
