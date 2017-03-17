var plugins = [];

plugins.push(require('hapi-auth-jwt2'));
plugins.push(require('./mongoose'));
plugins.push(require('./graphql'));
plugins.push(require('./graphiql'));

module.exports = plugins;
