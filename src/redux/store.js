import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsApi } from './ContactsAPI';
import filter from './filter';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

setupListeners(store.dispatch);
// import contactsReducer from './ContactsReducer';
// import filter from './filter';
// export const store = configureStore({
// reducer: {
// contacts: contactsReducer,
// filter,
// },
// });
