
import {v4 as uuid} from 'uuid';
import { GET_TRANSACTIONS, ADD_TRANSACTION } from '../actions/types';

const initState = {
    transactions: [
        {id: uuid(), amount: '$14',title: 'La cena',category: "Food", date: '2020-10-10'},
        {id: uuid(), amount: '$27',title: 'El almuerzo', category: "Food", date: '2020-10-12'}
    ]
}

export default (state=initState, action) => {
    switch (action.type) {
        case GET_TRANSACTIONS:
            return {
                ...state
            };
        case ADD_TRANSACTION:
            return {
                transactions: [action.payload,...state.transactions]
            };
        default:
            return {
                ...state
            };
    }
}