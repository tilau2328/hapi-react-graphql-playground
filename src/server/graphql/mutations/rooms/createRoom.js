const { GraphQLString } = require('graphql');
const { RoomType } = require('../../types');
const { createRoom } = require('../../../controllers/rooms');

const resolve = function(source, args, context, info){
  console.log(source, args, context, info);
  return new Promise((resolve, reject) => {
    createRoom((err, room) => {
      err ? reject(err) : resolve(room);
    });
  });
}

module.exports = {
  name: 'CreateRoom',
  type: RoomType,
  args: {
    name: { type: GraphQLString }
  },
  resolve
}
