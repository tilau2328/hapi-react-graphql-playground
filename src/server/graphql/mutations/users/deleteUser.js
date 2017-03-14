const { GraphQLID } = require('graphql');
const { deleteUser } = require('../../../controllers/users');

const resolve = function(source, args, context, info){
  console.log(source, args, context, info)
  return Promise((resolve, reject) => {
    deleteUser((err, success) => {
      err ? reject(err) : resolve(success);
    });
  });
}

module.exports = {
  name: 'DeleteUser',
  type: GraphQLID,
  args: {
    id: { type: GraphQLID }
  },
  resolve
}
