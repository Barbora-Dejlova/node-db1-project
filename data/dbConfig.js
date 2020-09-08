const knex = require("knex");

const knexfile = require("../knexfile.js");

// change to "production" and update knexfile.js to use postgre

const database = "production"

module.exports = knex(knexfile[database]);
