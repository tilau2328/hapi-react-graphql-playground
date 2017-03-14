const { GraphQLID } = require('graphql');
const { RoomType } = require('../../types');
const { findRoom } = require('../../../controllers/posts');

const resolve = function(source, args, context, info){
  console.log(source, args, context, info);
  return Promise((resolve, reject) => {
    findRoom((err, room) => {
      err ? reject(err) : resolve(room);
    });
  });
}

module.exports = {
  name: 'GetRoom',
  type: RoomType,
  args: {
    id: { type: GraphQLID }
  },
  resolve
};
