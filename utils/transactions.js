


const getCleanTransactions = transactions => {
    
    if (!Array.isArray(transactions)) transactions = [transactions]

    return transactions.map( transaction => {
            return {
                id: transaction._id,
                amount: transaction.amount,
                title: transaction.title,
                date: transaction.date,
                type: transaction.type,
            }
        })
}

module.exports = {getCleanTransactions}