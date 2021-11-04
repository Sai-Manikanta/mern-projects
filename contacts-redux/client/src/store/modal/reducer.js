import { OPEN, CLOSE } from './actionTypes';

const intialState = {
    isOpen: false,
    data: {}
};

function reducer(state = intialState, action){
    switch(action.type){
        case OPEN: 
            return { isOpen: true, data: action.payload }
        case CLOSE:
            return { isOpen: false, data: {} }
        default:
            return state
    }
}

export default reducer