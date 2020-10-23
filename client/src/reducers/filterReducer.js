import moment from 'moment';
import { SET_START_DATE, SET_END_DATE, SET_CATEGORY } from '../actions/types';

const initState = {
    startDate:new Date(moment().startOf('months')),
    endDate:new Date(moment().add(16,'days').startOf('months')),
    category: "all transactions"
}

export default (state=initState, action) => {
    switch (action.type) {
        case SET_END_DATE:
            return {
                ...state,
                endDate: action.payload
            }
        case SET_START_DATE:
            return {
                ...state,
                startDate: action.payload
            }
        case SET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        default:
            return {
                ...state
            };
    }
}