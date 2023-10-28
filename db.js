const knex = require('knex');
const config = require('./knexfile.js')[process.env.NODE_ENV || 'development'];

const dataBase = knex(config);

module.exports = dataBase;