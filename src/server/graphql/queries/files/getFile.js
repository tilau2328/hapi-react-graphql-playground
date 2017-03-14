const { GraphQLID } = require('graphql');
const { FileType } = require('../../types');

const resolve = function(source, args, context, info){
  console.log(source, args, context, info)
  return Promise.resolve({"username": 'meow'})
}

module.exports = {
  name: 'GetFile',
  type: FileType,
  args: {
    id: { type: GraphQLID }
  },
  resolve
};
