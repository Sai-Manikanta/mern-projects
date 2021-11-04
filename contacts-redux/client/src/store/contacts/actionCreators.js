import { CONTACT_ADD, CONTACT_EDIT, CONTACT_DELETED, CONTACT_SELECTED, REMOVE_CONTACT_SELECTED, SET_SEARCH_QUERY } from './actionTypes';

export const addContact = contactObj => ({
    type: CONTACT_ADD,
    payload: { ...contactObj }
});

export const editContact = contactObj => ({
    type: CONTACT_EDIT,
    payload: { ...contactObj }
});

export const deleteContact = id => ({
    type: CONTACT_DELETED,
    payload: {
        id
    }
});

export const selectContact = contact => ({
    type: CONTACT_SELECTED,
    payload: contact
});

export const removeSelectedContact = () => ({
    type: REMOVE_CONTACT_SELECTED
});

export const setSearchQuery = query => ({
    type: SET_SEARCH_QUERY,
    payload: query
});