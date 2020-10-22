import moment from 'moment';
import { SET_START_DATE, SET_END_DATE } from '../actions/types';

const initState = {
    startDate:new Date(moment().utc().startOf('months')),
    endDate:new Date(),
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
        default:
            return {
                ...state
            };
    }
}