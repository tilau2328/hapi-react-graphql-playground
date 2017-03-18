const { createRoom, editRoom, deleteRoom } = require('../../../controllers/rooms');

const CreateRoom = function(source, args){
  return new Promise((resolve, reject) => {
    createRoom(args, (err, comment) => {
      err ? reject(err) : resolve(comment);
    });
  });
}

const EditRoom = function(source, { id, name }){
  return new Promise((resolve, reject) => {
    editRoom(id, { name }, (err, comment) => {
      err ? reject(err) : resolve(comment);
    });
  });
}

const DeleteRoom = function(source, { id }){
  return new Promise((resolve, reject) => {
    deleteRoom(id, (err, success) => {
      err ? reject(err) : resolve(success);
    });
  });
}

module.exports = {
  CreateRoom,
  EditRoom,
  DeleteRoom
};
