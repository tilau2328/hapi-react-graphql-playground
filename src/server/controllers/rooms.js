const Room = require('../models/room');

const findRoom = function(id, callback){
  Room.findById(id, (err, room) => {
    err ? callback(err) : callback(null, room);
  });
}

const listRooms = function(callback){
  Room.find({}, (err, rooms) => {
    err ? callback(err) : callback(null, rooms);
  });
}

const createRoom = function(name, callback){
  const new_room = new Room({ name });
  new_room.save((err, room) => {
    err ? callback(err) : callback(null, room);
  });
}

const editRoom = function(id, callback){
  findRoom(id, (err, room) => {
    if(err){ callback(err); }
    // TODO: edit user
    room.save((err, room) => {
      err ? callback(err) : callback(null, room);
    });
  });
}

const deleteRoom = function(id, callback){
  Room.findByIdAndRemove(id, (err, room) => {
    err ? callback(err) : callback(null, room);
  });
}

const listRoomsById = function(room_ids, callback){
  var room_list = [];
  room_ids.map(({id}) => {
    Room.findById(id , (err, room) => {
      if(err) { callback(err); }
      rooms.push(room);
      if(rooms.length === room_ids.length) { callback(null, rooms); }
    });
  });
}

module.exports = {
  findRoom,
  listRooms,
  createRoom,
  editRoom,
  deleteRoom,
  listRoomsById
};
