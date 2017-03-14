const { GraphQLID, GraphQLBoolean } = require('graphql');
const { deleteRoom } = require('../../../controllers/rooms');

const resolve = function(source, args, context, info){
  console.log(source, args, context, info);
  return Promise((resolve, reject) => {
    deleteRoom((err, comment) => {
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
