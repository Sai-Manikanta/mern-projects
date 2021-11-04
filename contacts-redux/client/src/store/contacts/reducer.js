import { v4 as uuidv4 } from 'uuid';
import { CONTACT_ADD, CONTACT_EDIT, CONTACT_DELETED, CONTACT_SELECTED, REMOVE_CONTACT_SELECTED, SET_SEARCH_QUERY } from './actionTypes';

const intialState = {
    list: [
        {
            _id: 1,
            fullName: 'Saurab sir',
            email: 'saurab@gmail.com',
            phone: '9755570187',
            company: 'Software',
            address: 'Hyderabad'
        },
        {
            _id: 2,
            fullName: 'Sai Mani Bandaru',
            email: 'mani333007@gmail.com',
            phone: '9505629940',
            company: 'soft',
            address: 'Hyderabad'
        },
        {
            _id: 3,
            fullName: 'Sai',
            email: 'mani333007@gmail.com',
            phone: '9505629940',
            company: 'Will Soft',
            address: 'Hyderabad'
        },
        {
            _id: 4,
            fullName: 'Devi Kiran Bandaru',
            email: 'devikiran@gmail.com',
            phone: '7288097613',
            company: 'Will Soft',
            address: 'Hyderabad'
        }
    ],
    selectedContact: {},
    searchedQuery: ''
};

function contactsReducer(state = intialState, action){
    switch(action.type){
        case CONTACT_ADD:
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        ...action.payload,
                        _id: uuidv4()
                    }
                ]
            }
        case CONTACT_EDIT:
            return {
                ...state,
                list: state.list.map(contact => contact._id === action.payload._id ? { ...action.payload } : contact)
            }
        case CONTACT_DELETED:
            return {
                ...state,
                list: state.list.filter(contact => contact._id !== action.payload.id)
            }
        case CONTACT_SELECTED:
            return {
                ...state,
                selectedContact: action.payload
            }

        case REMOVE_CONTACT_SELECTED:
            return {
                ...state,
                selectedContact: {}
            }
        case SET_SEARCH_QUERY:
            return {
                ...state,
                searchedQuery: action.payload
            }
        default:
            return state
    }
}

export default contactsReducer