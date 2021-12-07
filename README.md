# Fullstack Collection App

This repo is designed to provide space to code a fullstack app. It contains node modules and folders for databases, routes, api requests, react components, and redux actions and creators. Let's get going!

```
npm install
git checkout -b <branchname>
npm run dev
```

## Notes

A few notes to keep you out of trouble:
- When running knex, run `npm run knex <command>`, e.g. `npm run knex migrate:latest` rather than using `npx`
- When running webpack, run `npm run webpack <extra commands>`, e.g. `npm run webpack`, rather than using `npx`

## How to start

First, decide what you would like to keep a collection of. This could be a repo for keeping track of movies, books, gifs, cars, rocks, anything you fancy!

**Note:** the aim is to have some simple data. If you think you might need more than one database table, or have lots of details you want to store, how could you simplify the information you're keeping track of? Leave more complex data until later in the project. For example, I want to keep track of books that I want to read, ones that I have read, and ones that I own. To start with though, let's keep track of the books themselves. My data might look like:

|id|title|author|
|---|---|---|
| 1 | Ready Player One | Ernest Cline |
| 2 | Throwing Rocks at the Google Bus | Douglas Rushkoff |

Our first job is getting something showing on the front end from our database. Here's a list of steps in case they are useful. You can build in any order you like though ;)

### Back End

1.  Design a database to store a list of tasks
1.  Build the migrations and seed data
1.  Build an API (back end route) to get the information from your database
1.  Test your API with Postman/Insomnia

### Front End

1.  Build a React Component with static html
1.  Build Redux Reducer. Start with a hardcoded initial state, for example:
```js
const initialState = [{ id: 1, title: 'Ready Player One', author: 'Ernest Cline' }]
```
3.  Use `useSelector` to display the redux state you hardcoded in the React Component
1.  Build an API Client in the front end to request the information from your routes
1.  Build Thunk Actions to use the API and get the information
1.  Build Redux Actions to save task data from the thunk
1.  Use `useDispatch` and `useEffect` to dispatch the thunk when your app loads

## Next steps

At this stage we should be able to view our information. Below are suggested next steps, though you might prioritize these in another order.

- Include the ability to add a new record (will need a form in your components)
- Include the ability to remove/delete records
- Include the ability to update records (e.g. for correcting typos)
  - You might have some other information (e.g. unread books vs. read books) that should be included in your database design, but this may require adjusting your database design - start simple!
- Is there any complex data you chose to not include earlier or any way you could expand this dataset?
- COuld you add an external API (maybe an inspirational quote in the footer?)
- If you haven't already, CSS!
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
