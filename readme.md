

# Track It
[A web application](https://fin-track.netlify.app/) that allows you to track your incomes, and expenses.

> Please find the client [here](https://github.com/Schapagain/fin-track-client)

I kept track of my basic finances using Python and some basic CLI functions for a while, and really enjoyed the process.
When I started learning web development, I wanted to build something more interactive and visual, and this project came to life as a result.

Please feel free to send requests to the server deployed in [heroku](https://my-ftrack-app.herokuapp.com/) if you're working on building a different frontend for a similar task. The startup might be slightly slow since I only have a free membership.


# Guide to the backend API

## User handling
1. Register a user

  * **Endpoint**: /api/users
  * **Method**: POST
  * **Payload**: User { name, email, password }
  * **Response**: { User, token } 

2. Authenticate a user

  * **Endpoint**: /api/auth
  * **Method**: POST
  * **Payload**: {email, password}
  * **Response**: { User, token } 

3. Get user info
  * **Endpoint**: /api/auth/user
  * **Method**: GET
  * **Header**: Authorization : token
  * **Response**: { name, email } 
## Transaction handling

1. Add a new transaction

  * **Endpoint**: /api/transactions
  * **Method**: POST
  * **Header**: Authorization : token
  * **Payload**: Transaction { amount, title, date, category, type }
  * **Response**: { transaction: Transaction } 

2. View all transactions

  * **Endpoint**: /api/transactions
  * **Method**: GET
  * **Header**: Authorization : token
  * **Optional parameters**: startDate, endDate, category, type
  * **Response**: { transactions: [ Transaction ] } 
  * **Note**: Only startDate is inclusive
