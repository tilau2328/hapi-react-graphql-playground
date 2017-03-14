const { GraphQLID } = require('graphql');

const resolve = function(source, args, context, info){
  console.log(source, args, context, info)
  return Promise.resolve({"username": 'meow'})
}

module.exports = {
  name: 'DeleteRoom',
  type: GraphQLID,
  args: {
    id: { type: GraphQLID }
  },
  resolve
}
