
import { GET_TRANSACTIONS, ADD_TRANSACTION, TRANSACTIONS_LOADING } from '../actions/types';

const initState = {
    transactions: [],
    loading: false
}

export default (state=initState, action) => {
    switch (action.type) {
        case GET_TRANSACTIONS:
            return {
                ...state,
                transactions: action.payload,
                loading: false
            };
        case ADD_TRANSACTION:
            return {
                ...state,
                transactions: [action.payload,...state.transactions]
            };
        case TRANSACTIONS_LOADING:
            return {
                ...state,
                loading: true,
            }
        default:
            return {
                ...state
            };
    }
}