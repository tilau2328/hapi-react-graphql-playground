const { GraphQLID } = require('graphql');
const { RoomType } = require('../../types');

const resolve = function(source, args, context, info){
  console.log(source, args, context, info)
  return Promise.resolve({"username": 'meow'})
}

module.exports = {
  name: 'GetRoom',
  type: RoomType,
  args: {
    id: { type: GraphQLID }
  },
  resolve
};
