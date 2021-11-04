import { OPEN, CLOSE } from './actionTypes';

// action creators
export const openModal = (dataObj) => ({ 
    type: OPEN,
    payload: { ...dataObj }
});
export const closeModal = () => ({ type: CLOSE });