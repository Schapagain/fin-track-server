


const getCleanTransactions = transactions => {
    
    if (!Array.isArray(transactions)) transactions = [transactions]

    return transactions.map( transaction => {
            return {
                id: transaction.id,
                amount: transaction.amount,
                title: transaction.title,
                date: transaction.date,
            }
        })
}


module.exports = {getCleanTransactions}