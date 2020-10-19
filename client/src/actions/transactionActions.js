import axios from 'axios';
import { getPrettyDate } from '../utils';
import { GET_TRANSACTIONS, ADD_TRANSACTION, TRANSACTIONS_LOADING} from './types';

export const getTransactions = () => async dispatch => {
    dispatch(setTransactionsLoading());
    try{
        const result = await axios.get('/api/transactions');
        dispatch({
            type: GET_TRANSACTIONS,
            payload: result.data.transactions.map(transaction => getPrettyDate(transaction))
        })
    }
    catch(err){
        console.log(err);
    }
};

export const addTransaction = transaction => async dispatch => {
    
    try{
        const result = await axios.post('/api/transactions',transaction);
        dispatch({
            type: ADD_TRANSACTION,
            payload: getPrettyDate(result.data.transaction)
        })
    }
    catch(err){
        console.log(err);
    }

};

export const setTransactionsLoading = () => {
    return {
        type: TRANSACTIONS_LOADING,
    };
};