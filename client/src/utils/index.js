
const moment = require('moment');
export const getPrettyDate = transaction =>{
    return {
        ...transaction,
        dateObj: transaction.date,
        date: moment(transaction.date).format('MMM Do YY')
    }
}

export const getCumulativeAmountsForCurrentMonth = transactions => {

    // Filter transactions for this month
    // and sort them in ascending order of date
    // Note: API returns in descending order
    transactions = 
    transactions
        .filter( transaction => moment(transaction.dateObj).month() === moment().month())
        .map( transaction => ({day: moment(transaction.dateObj).date(), type: transaction.type, amount: transaction.amount, dateObj: transaction.dateObj}))
        .reverse()
    
    // Sum up transactions for each day where at least one transaction has occured
    let amounts = new Map();
    for (let transaction of transactions){
        const currentAmount = _getSignedAmount(transaction);
        const currentDay = moment(transaction.dateObj).format('Do');
        amounts.has(currentDay)? amounts.set(currentDay,amounts.get(currentDay) + currentAmount) : amounts.set(currentDay,currentAmount);
    }

    // Find cumulative amounts for all such days
    const cumulativeAmounts = [...amounts.values()].map((sum => value => sum += value)(0))
    return { days: [...amounts.keys()], amounts: cumulativeAmounts, month: moment().format('MMMM')}
}

const _getSignedAmount = transaction => {
    if (transaction.type === 'expense') return -1 * transaction.amount;
    return transaction.amount;
}