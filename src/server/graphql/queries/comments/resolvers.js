const { listComments, findComment } = require('../../../controllers/comments');

const GetComments = function(){
  return new Promise((resolve, reject) => {
    listComments((err, rooms) => {
      err ? reject(err) : resolve(rooms);
    });
  });
}

const GetComment = function(source, { id }){
  return new Promise((resolve, reject) => {
    findComment(id, (err, room) => {
      err ? reject(err) : resolve(room);
    });
  });
}

module.exports = {
  GetComments,
  GetComment
}
