const { GraphQLList } = require('graphql');
const { RoomType } = require('../../types');
const { listRooms } = require('../../../controllers/rooms');

const resolve = function(){
  return new Promise((resolve, reject) => {
    listRooms((err, rooms) => {
      err ? reject(err) : resolve(rooms);
    });
  });
}

module.exports = {
  name: 'GetRooms',
  type: new GraphQLList(RoomType),
  resolve
};
