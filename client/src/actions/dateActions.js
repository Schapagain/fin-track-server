import { SET_START_DATE, SET_END_DATE } from './types';

export const setStartDate = date => (dispatch,getState) => {
    dispatch({
        type: SET_START_DATE,
        payload: date,
    });
}

export const setEndDate = date => (dispatch,getState) => {
    dispatch({
        type: SET_END_DATE,
        payload: date,
    });
}
