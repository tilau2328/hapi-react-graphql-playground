const { GraphQLList } = require('graphql');
const { UserType } = require('../../types');
const { listUsers } = require('../../../controllers/users');

const resolve = function(source, args, context, info){
  console.log(source, args, context, info)
  return Promise((resolve, reject) => {
    createUser((err, users) => {
      err ? reject(err) : resolve(users);
    });
  });
}

module.exports = {
  name: 'GetRooms',
  type: new GraphQLList(UserType),
  resolve
};
