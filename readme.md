
# Guide to the backend API

1. Add a new transaction

  * **Endpoint**: /api/transactions
  * **Method**: POST
  * **Payload**: Transaction { amount, title, date, category, type }
  * **Response**: { success , transaction: Transaction } 

2. View all transactions

  * **Endpoint**: /api/transactions
  * **Method**: GET
  * **Response**: { success , transactions: [ Transaction ] } 
