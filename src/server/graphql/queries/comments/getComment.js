const { GraphQLID } = require('graphql');
const { CommentType } = require('../../types');

const resolve = function(source, args, context, info){
  console.log(source, args, context, info)
  return Promise.resolve({"username": 'meow'})
}

module.exports = {
  name: 'GetPosts',
  type: new GraphQLList(CommentType),
  args: {
    id: { type: GraphQLID }
  },
  resolve
};
