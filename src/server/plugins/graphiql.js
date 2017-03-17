const { graphiqlHapi } = require('graphql-server-hapi');

module.exports = {
  register: graphiqlHapi,
  options: {
    path: '/graphiql',
    graphiqlOptions: {
      endpointURL: '/graphql',
    },
    route: {
      auth: false
    }
  }
};
