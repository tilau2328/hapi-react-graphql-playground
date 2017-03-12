var plugins = [];

plugins.push(require('hapi-auth-jwt2'));
plugins.push(require('./mongoose'));
plugins.push(require('./graphql'));

module.exports = plugins;
