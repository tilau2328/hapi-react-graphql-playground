const { GraphQLString, GraphQLID } = require('graphql');
const { RoomType } = require('../../types');
const { editRoom } = require('../../../controllers/rooms');

const resolve = function(source, { id, name  }){
  return new Promise((resolve, reject) => {
    editRoom(id, { name  }, (err, room) => {
      err ? reject(err) : resolve(room);
    });
  });
}

module.exports = {
  name: 'EditRoom',
  type: RoomType,
  args: {
    id: { type: GraphQLID },
    name: { type: GraphQLString }
  },
  resolve
}
