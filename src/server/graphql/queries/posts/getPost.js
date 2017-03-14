const { GraphQLID } = require('graphql');
const { PostType } = require('../../types');

const resolve = function(source, args, context, info){
  console.log(source, args, context, info)
  return Promise.resolve({"username": 'meow'})
}

module.exports = {
  name: 'GetPost',
  type: PostType,
  args: {
    id: { type: GraphQLID }
  },
  resolve
};
