const { graphqlHapi } = require('graphql-server-hapi');
const schema = require('../graphql/schema');

module.exports = {
  register: graphqlHapi,
  graphiql: true,
  options: {
    path: '/graphql',
    graphqlOptions: {
      schema
    },
    route: {
      cors: true,
      auth: false
    }
  }
}
