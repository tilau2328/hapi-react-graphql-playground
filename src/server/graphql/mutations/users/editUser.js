const { GraphQLID } = require('graphql');
const { UserType } = require('../../types');
const { editUser } = require('../../../controllers/users');

const resolve = function(source, args, context, info){
  console.log(source, args, context, info)
  return Promise((resolve, reject) => {
    editUser((err, comment) => {
      err ? reject(err) : resolve(comment);
    });
  });
}

module.exports = {
  name: 'EditUser',
  type: UserType,
  args: {
    id: { type: GraphQLID }
  },
  resolve
}
