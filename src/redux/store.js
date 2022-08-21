import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './ContactsReducer';
import filter from './filter';
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    // filter,
  },
});
