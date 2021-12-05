const e = require("express");

exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments( 'id' )
    table.string ( 'firstName' )
    table.string ( 'lastName' )
    table.string( 'email' )
    table.string( 'hash' )
    table.string( 'roll' )
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
