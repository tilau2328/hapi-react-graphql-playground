const { listFiles, findFile } = require('../../../controllers/files');

const GetFiles = function(){
  return new Promise((resolve, reject) => {
    listFiles((err, rooms) => {
      err ? reject(err) : resolve(rooms);
    });
  });
}

const GetFile = function(source, { id }){
  return new Promise((resolve, reject) => {
    findFile(id, (err, room) => {
      err ? reject(err) : resolve(room);
    });
  });
}

module.exports = {
  GetFiles,
  GetFile
}
