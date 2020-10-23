import { SET_START_DATE, SET_END_DATE, SET_CATEGORY } from './types';
import moment from 'moment';

export const setStartDate = date => (dispatch,getState) => {
    dispatch({
        type: SET_START_DATE,
        payload: new Date(moment(date)),
    });
}

export const setEndDate = date => (dispatch,getState) => {
    console.log('at action:',date);
    dispatch({
        type: SET_END_DATE,
        payload: new Date(moment(date)),
    });
}

export const setCategory = category => dispatch => {
    dispatch({
        type: SET_CATEGORY,
        payload: category,
    })
}