const Room = require('../models/user');

const getRooms = function(callback){
  return new Promise((resolve, reject) => {
    Rooms.find({}, (err, rooms) => {
      err ? reject(err) : resolve(rooms);
    });
  });
}

module.exports = {
  get: getRooms
};
