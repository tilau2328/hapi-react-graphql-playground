const { GraphQLList } = require('graphql');
const { RoomType } = require('../../types');
const { listRooms } = require('../../../controllers/posts');

const resolve = function(source, args, context, info){
  console.log(source, args, context, info);
  return Promise((resolve, reject) => {
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
