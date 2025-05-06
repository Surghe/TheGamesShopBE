# The GamesShop BackEnd

## Brief Desc:

Server built to serve data from mongoDB to our frontend.

## Schemas:

- Users
 - name
 - password
 - email
 - admin: bool

- Games
 - name
 - category
 - price
 - desc
 - numOfPlayers
 - qty
- Cart
 - items
 - total price
 - userId

## Routes:

- users
 - post user
 - read user
 - edit user 
 - delete user

- games
 - get all games by id
 - get one game by id
 - admin update 
 - admin delete


- cart
 - add to cart
 - remove from cart
 - "checkout"


## Technologies

 - mongoose
 - express
 - dotenv
 - logger/tracker
 - cors - for connecting to our front end