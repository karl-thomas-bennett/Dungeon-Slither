const connection = require('./connection')

const getLevelsAll = (db = connection) => {
  return db('levels')
  .select()
}

const getLevelById = (id, db = connection) => {
  return db('levels')
  .where('id', id)
  .first()
}

const addLevel = (newLevel, db = connection) => {
  return db('levels')
  .insert(newLevel)
}

const deleteLevel = (id, db = connection) => {
  return db('levels')
  .where('id', id)
  .delete()
}

module.exports = {
  getLevelsAll,
  getLevelById,
  addLevel,
  deleteLevel
}
