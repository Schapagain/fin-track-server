
# Guide to the backend API

## User handling
1. Register a user

  * **Endpoint**: /api/users
  * **Method**: POST
  * **Payload**: User { name, email, password }
  * **Response**: { success , User, token } 

2. Authenticate a user

  * **Endpoint**: /api/auth
  * **Method**: POST
  * **Payload**: {email, password}
  * **Response**: { success , User, token } 

## Transaction handling
> Note: Handling user transactions requires a token in headers.authorization

1. Add a new transaction

  * **Endpoint**: /api/transactions
  * **Method**: POST
  * **Payload**: Transaction { amount, title, date, category, type }
  * **Response**: { success , transaction: Transaction } 

2. View all transactions

  * **Endpoint**: /api/transactions
  * **Method**: GET
  * **Optional parameters**: startDate, endDate
  * **Response**: { success , transactions: [ Transaction ] } 
