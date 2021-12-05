The focus of this app is to provide a merch store for the Dungon Cralwer game. the store uses the sweet as organics excersise as a template.
Date: 02/12/2021

USE CASES

1. as a customer:
2. 
3.  I want to be able to view a list of products and there details.
4.  I want to be able to add and remove products to and from a cart
5.  I want to be able to edit the quantity of products in the cart and see the total reflect that change
6.  from the cart I want to be able to continue shopping and not loose the items I have in the cart
7.  from the cart I want to be able to add the contents of the cart to orders
8.  I want to be able to view a record of my orders
9.  I want to be able to check an orders status

as an admin:
1. I want to be able to add products to the store.
2. I want to be able to edit and delete proucts in the store.

## API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| post | /api/auth/login | yes | loggs in a user | The Users JWT Token |
| post | /api/auth/register | yes | The users JWT token |
| get | /api/products | no | gets a list of active products | array of objects (object = product) |
| get | /api/cart | no | gets a list of items in the cart | array of objects (object = product) |
| post | /api/cart | no | add a product to the cart | the product was added as an object |
| post | /api/:user_id/orders | yes | add the contents of the cart to an order | array of objects (object = products) | 
| get | /api/:user_id/orders | yes | view a record of a customers orders | array of orders containing an array of products |

## Actions (Client) 
| Type | Data | Purpose |
| --- | --- | --- |
| RECIEVE_ALL_PRODUCTS | Products | for retrieving a list of active products |
| ADD__PRODUCT | Product | for adding a new product to the store |
| RECIEVE_CART | Cart | for recieving all products in the cart |
| ADD_PRODUCT_TO_CART | Cart | for adding a product to the cart |
| ADD_ORDER | Orders | for adding a new order |
| RECIEVE_ORDERS | Orders | for recieveing a list of a customers orders

## Reducers (Client side) 
| name | purpose |
|---|---|
| auth | store information reguarding user login, auth status and errors |
| products | stores the array of active products |
| cart | stores a list of products in a cart |
| orders | stores a customers orders |

DB server side

### Users
| Data Type | Column Name | Purpose |
| --- | --- | --- |
| increments | id | 
| string | firstName | 
| string | lastName |
| string | email |
| string | hash |
| string | roll |

### Products
| Data Type | Column Name | Purpose |
| --- | --- | --- |
| increments | id |
| string | name |
| string | category |
| integer | price |
| integer | stock |
| text | descriptopn |
| string | img |
| boolean | active |

### Orders
| Data Type | Column Name | Purpose |
| --- | --- | --- |
| increments | id |
| integer | user_id |
| integer | product_id |
| integer | total_cost |
| string | order_date |
| string | payed_date |
