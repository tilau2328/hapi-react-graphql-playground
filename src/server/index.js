const hapi = require('hapi');
const corsHeaders = require('hapi-cors-headers')

const hapi_jwt = require('./plugins/jwt');
const config = require('./config');
const server = new hapi.Server();

module.exports = server;

server.connection({
  host: config.host.ip,
  port: config.host.port
});

server.ext('onPreResponse', corsHeaders);

server.register(require('./plugins'), (err) => {
    if (err) { throw err; }
    hapi_jwt.register(server);
    server.route(require('./routes'));
    server.start((err) => {
        if (err) { throw err; }
        console.log(`Server running at: ${server.info.uri}`);
    });
});
