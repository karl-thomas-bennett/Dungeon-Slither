const e = require("express");

exports.up = function(knex) {
  return knex.schema.createTable('products', table => {
    table.increments( 'id' )
    table.string ( 'name' )
    table.string ( 'category' )
    table.string( 'description' )
    table.decimal( 'price' )
    table.integer( 'stock' )
    table.string( 'img' )
    table.boolean( 'active' )
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('products')
};