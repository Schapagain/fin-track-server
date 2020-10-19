
const getCleanTransactions = transactions => {
    
    if (!Array.isArray(transactions)) transactions = [transactions]

    return transactions.map( transaction => {
        let {id,amount,title,date,type} = transaction;
            return {id,amount,title,date,type}
    })
}

module.exports = {getCleanTransactions}