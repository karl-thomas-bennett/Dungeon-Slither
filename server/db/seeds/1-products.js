exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, name: 'Shirt - Cute Snake', category: 'tshirt', description: 'White t-shirt with a very cute snake.', price: 25.00, stock: 5, img: 'https://m.media-amazon.com/images/I/A1ntnF3PJOL._CLa%7C2140%2C2000%7C81cI-T50M8L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UL1500_.png', active: true},
        {id: 2, name: 'Shirt - Orange Snake', category: 'tshirt', description: 'Black t-shirt with an orange snake.', price: 25.00, stock: 6, img: 'https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C81GjysTrSeL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UL1500_.png', active: true},
        {id: 3, name: 'Hoodie - Top Hat', category: 'hoodie', description: 'Grey hoodie with a top hat wearing snake.', price: 40.00, stock: 7, img: 'https://res.cloudinary.com/teepublic/image/private/s--rPYz0mzR--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_465/c_crop,g_north_west,h_620,w_465,x_0,y_-60/g_north_west,u_upload:v1446840653:production:blanks:f6q1psnlmvhpoighmph1,x_-391,y_-336/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1580051803/production/designs/7718534_0.jpg', active: true},
        {id: 4, name: 'Hoodie - Snake Pun', category: 'hoodie', description: 'Grey hoodie with a snake pun.', price: 40.00, stock: 8, img: 'https://images.lookhuman.com/render/standard/Ag4vRlQmUorCtcDOoX0KGMj7UdtNfguQ/97200-athletic_gray-lg-t-snake-it-til-you-make-it.jpg', active: true},
        {id: 5, name: 'Plushie - Green Snake', category: 'plushie', description: 'Long, green snake plushie.', price: 15.00, stock: 9, img: 'https://themarket.azureedge.net/resizer/view?key=da033b72e3503c326b037c5bf6c69ced&b=productimages&w=418&h=632', active: true},
        {id: 6, name: 'Plushie - Brown Snake', category: 'plushie', description: 'Brown patterned snake plushie.', price: 15.00, stock: 10, img: 'https://m.media-amazon.com/images/I/61s1hZDDq7L._AC_SL1500_.jpg', active: true}
      ]);
    });
};