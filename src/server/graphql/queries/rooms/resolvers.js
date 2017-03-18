const { listRooms, findRoom } = require('../../../controllers/rooms');

const GetRooms = function(){
  return new Promise((resolve, reject) => {
    listRooms((err, rooms) => {
      err ? reject(err) : resolve(rooms);
    });
  });
}

const GetRoom = function(source, { id }){
  return new Promise((resolve, reject) => {
    findRoom(id, (err, room) => {
      err ? reject(err) : resolve(room);
    });
  });
}

module.exports = {
  GetRooms,
  GetRoom
}
