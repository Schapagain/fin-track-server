import axios from 'axios';
import { getPrettyDate } from '../utils';
import { GET_TRANSACTIONS, ADD_TRANSACTION, TRANSACTIONS_LOADING } from './types';
import {getTokenConfig} from './authActions';
const localPrefix = 'http://localhost:5000';

export const getTransactions = () => async (dispatch,getState) => {
    dispatch(setTransactionsLoading());
    const endpoint = process.env.NODE_ENV === "production"? '/api/transactions':localPrefix+'/api/transactions';
    const config = getTokenConfig(getState);
    const { startDate, endDate, category, type } = getState().filterReducer;
    config.params= {startDate, endDate, category, type};

    try{
        const result = await axios.get(endpoint,config);
        dispatch({
            type: GET_TRANSACTIONS,
            payload: result.data.transactions.map(transaction => getPrettyDate(transaction))
        })
    }
    catch(err){
        console.log(err);
    }
};

export const addTransaction = transaction => async (dispatch,getState) => {
    
    const endpoint = process.env.NODE_ENV === "production"? '/api/transactions':localPrefix+'/api/transactions';
    try{
        const result = await axios.post(endpoint,transaction,getTokenConfig(getState));
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