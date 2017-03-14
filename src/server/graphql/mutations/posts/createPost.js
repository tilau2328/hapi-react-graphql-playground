const { GraphQLID, GraphQLString } = require('graphql');
const { PostType } = require('../../types');

const resolve = function(source, args, context, info){
  console.log(source, args, context, info)
  return Promise.resolve({"username": 'meow'})
}

module.exports = {
  name: 'CreatePost',
  type: PostType,
  args: {
    text: { type: GraphQLString },
    author: { type: GraphQLID },
    room: { type: GraphQLID }
  },
  resolve
}
