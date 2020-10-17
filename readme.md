
## # Usage via HTTP

1. Add a new transaction

  * **Endpoint**: /api/transactions
  * **Method**: POST
  * **Payload**: { amount, title, date }
  * **Response**: { success , transaction: Transaction } 

2. View all transactions

  * **Endpoint**: /api/transactions
  * **Method**: GET
  * **Response**: { success , transactions: [ Transaction ] } 
