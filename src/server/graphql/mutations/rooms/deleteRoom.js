const { GraphQLID, GraphQLBoolean } = require('graphql');
const { deleteRoom } = require('../../../controllers/rooms');

const resolve = function(source, { id }){
  return new Promise((resolve, reject) => {
    deleteRoom(id, (err, comment) => {
      err ? reject(err) : resolve(comment);
    });
  });
}

module.exports = {
  name: 'DeleteRoom',
  type: GraphQLBoolean,
  args: {
    id: { type: GraphQLID }
  },
  resolve
}
