import request from 'superagent'

export function placeOrder( cart ) {
   console.log('hitting api')
   console.log(cart)
   return request.post('/api/v1/orders')
   .send({ 
           orderRequest: cart 
         })
   // .then(res => res.body.newId)
}

export function getOrders(){
   console.log('hitting get orders api')
   return request.get('/api/v1/orders')
   .then ((res) => res.body
   
   )
}