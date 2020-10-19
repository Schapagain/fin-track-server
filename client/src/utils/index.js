
const moment = require('moment');
export const getPrettyDate = transaction =>{
    return {
        ...transaction,
        dateObj: transaction.date,
        date: moment(transaction.date).format('MMM Do YY')
    }
}