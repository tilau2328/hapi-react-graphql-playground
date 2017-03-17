const { GraphQLID, GraphQLBoolean } = require('graphql');
const { deleteUser } = require('../../../controllers/users');

const resolve = function(source, { id }){
  return new Promise((resolve, reject) => {
    deleteUser(id, (err, success) => {
      err ? reject(err) : resolve(success);
    });
  });
}

module.exports = {
  name: 'DeleteUser',
  type: GraphQLBoolean,
  args: {
    id: { type: GraphQLID }
  },
  resolve
}
