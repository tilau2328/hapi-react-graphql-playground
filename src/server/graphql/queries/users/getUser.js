const { GraphQLID } = require('graphql');
const { UserType } = require('../../types');

const resolve = function(source, args, context, info){
  console.log(source, args, context, info)
  return Promise.resolve({"username": 'meow'})
}

module.exports = {
  name: 'GetUser',
  type: UserType,
  args: {
    id: { type: GraphQLID }
  },
  resolve
};
