import request from 'superagent'

export function placeOrder( cart ) {
   return request.post('/api/v1/orders')
   .send({ 
           orderRequest: cart 
         })
   // .then(res => res.body.newId)
}

export function getOrders(){
   return request.get('/api/v1/orders')
   .then ( (res) => res.body )
}