const { GraphQLString, GraphQLID } = require('graphql');
const { RoomType } = require('../../types');
const { editRoom } = require('../../../controllers/rooms');

const resolve = function(source, args, context, info){
  console.log(source, args, context, info);
  return Promise((resolve, reject) => {
    editRoom((err, room) => {
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
