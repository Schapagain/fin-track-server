import { combineReducers } from 'redux';
import transactionReducer from './transactionReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    transactionReducer: transactionReducer,
    authReducer: authReducer,
    errorReducer: errorReducer
})