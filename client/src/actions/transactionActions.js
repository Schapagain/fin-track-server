import { GET_TRANSACTIONS, ADD_TRANSACTION} from './types';

export const getTransactions = () => {
    return {
        type: GET_TRANSACTIONS
    };
};

export const addTransaction = transaction => {
    return {
        type: ADD_TRANSACTION,
        payload: transaction
    };
};