import { createStore, combineReducers } from 'redux'
import contactsReducer from './contacts/reducer'
import modalReducer from './modal/reducer'

const rootReducer = combineReducers({
    contacts: contactsReducer,
    modal: modalReducer
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store