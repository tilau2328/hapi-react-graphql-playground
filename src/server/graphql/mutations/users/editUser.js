const { GraphQLID } = require('graphql');
const { UserType } = require('../../types');
const { editUser } = require('../../../controllers/users');

const resolve = function(source, { id }, context, info){
  console.log(source, context, info)
  return new Promise((resolve, reject) => {
    editUser(id, (err, comment) => {
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
