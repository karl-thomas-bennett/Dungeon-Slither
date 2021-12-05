const connection = require('./connection')

module.exports = {
  listProducts
}

function listProducts( db = connection ){
  console.log( 'getting products from the database')
  return db('products')
  .select()
}