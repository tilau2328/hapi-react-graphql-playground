const { GraphQLString } = require('graphql');
const { RoomType } = require('../../types');

const resolve = function(source, args, context, info){
  console.log(source, args, context, info)
  return Promise.resolve({"username": 'meow'})
}

module.exports = {
  name: 'CreateRoom',
  type: RoomType,
  args: {
    name: { type: GraphQLString }
  },
  resolve
}
