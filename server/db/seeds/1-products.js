exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, name: 'tshirt1', category: 'tshirt', description: 'abc', price: 25.00, stock: 5, img: 'null', active: true},
        {id: 2, name: 'tshirt2', category: 'tshirt', description: 'def', price: 25.00, stock: 6, img: 'null', active: true},
        {id: 3, name: 'hoodie1', category: 'hoodie', description: 'ghi', price: 40.00, stock: 7, img: 'null', active: true},
        {id: 4, name: 'hoodie2', category: 'hoodie', description: 'jkl', price: 40.00, stock: 8, img: 'null', active: true},
        {id: 5, name: 'plushie1', category: 'plushie', description: 'mno', price: 15.00, stock: 9, img: 'null', active: true},
        {id: 6, name: 'plushie2', category: 'plushie', description: 'pqr', price: 15.00, stock: 10, img: 'null', active: true}
      ]);
    });
};