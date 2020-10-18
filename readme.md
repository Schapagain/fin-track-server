
## # Configuration
  > Note: all commands are run in the root directory
  * Install server-side dependencies<br/>
    ```
      npm install
    ```
  * Install client-side dependencies
    ```
      npm run client-install
    ```
  * Run on default ports
    ```
      npm run server
      npm run client
    ```

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
