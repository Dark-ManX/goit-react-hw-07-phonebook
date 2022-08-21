import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  postContacts,
  deleteContact,
} from './ContactsActions';

const items = createReducer([], {
  [fetchContactsSuccess]: (state, { payload }) => (state = payload),
});

const addItem = createReducer(
  {},
  {
    [postContacts]: (state, { payload }) => console.log(payload),
  }
);

const deleteItem = createReducer(
  {},
  {
    [deleteContact]: (state, { payload }) => console.log(payload),
  }
);

const error = createReducer(null, {
  [fetchContactsError]: (state, { payload }) => (state = payload),
});

const isLoading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
});

export default combineReducers({
  items,
  addItem,
  error,
  isLoading,
});
