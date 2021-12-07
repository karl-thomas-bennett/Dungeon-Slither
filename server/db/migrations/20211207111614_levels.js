exports.up = function(knex) {
  return knex.schema.createTable('levels', (table) => {
    table.increments('id')
    table.string('name')
    table.string('direction')
    table.string('tiles')
    table.string('scores')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('levels')
}
