const mongoose = require('mongoose');
const config = require('../config');

const options = {
  mongodbUrl: config.database.host,
  bluebird: true
};

module.exports = {
  register: require('hapi-mongoose-db-connector'),
  options: options
};
