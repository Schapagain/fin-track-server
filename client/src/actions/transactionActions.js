import axios from 'axios';
import { GET_TRANSACTIONS, ADD_TRANSACTION, TRANSACTIONS_LOADING} from './types';

export const getTransactions = () => async dispatch => {
    dispatch(setTransactionsLoading());
    try{
        const result = await axios.get('http://localhost:5000/api/transactions')
        dispatch({
            type: GET_TRANSACTIONS,
            payload: result.data.transactions
        })
    }
    catch(err){
        console.log(err);
    }
};

export const addTransaction = transaction => {
    return {
        type: ADD_TRANSACTION,
        payload: transaction
    };
};

export const setTransactionsLoading = () => {
    return {
        type: TRANSACTIONS_LOADING,
    };
};