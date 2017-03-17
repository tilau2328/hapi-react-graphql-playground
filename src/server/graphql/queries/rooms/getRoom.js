const { GraphQLID } = require('graphql');
const { RoomType } = require('../../types');
const { findRoom } = require('../../../controllers/rooms');

const resolve = function(source, { id }){
  return new Promise((resolve, reject) => {
    findRoom(id, (err, room) => {
      err ? reject(err) : resolve(room);
    });
  });
}

module.exports = {
  name: 'GetRoom',
  type: RoomType,
  args: {
    id: { type: GraphQLID }
  },
  resolve
};
