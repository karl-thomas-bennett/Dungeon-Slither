const { prototypeLevel, prepForDB } = require('../../utils')

exports.seed = function(knex) {
  return knex('levels').del()
    .then(function () {
      return knex('levels').insert([
        {
          id: 1,
          name: 'Prototype Level 1',
          direction: 'down',
          tiles: prepForDB(prototypeLevel),
          scores: prepForDB([])
        }
      ])
    })
}
