
const moment = require('moment');

const getCleanTransactions = transactions => {
    
    if (!Array.isArray(transactions)) transactions = [transactions]

    return transactions.map( transaction => {
            return {
                id: transaction._id,
                amount: transaction.amount,
                title: transaction.title,
                date: moment(transaction.date).format('YYYY-MM-DD'),
                type: transaction.type,
            }
        })
}

module.exports = {getCleanTransactions}