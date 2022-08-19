import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction('contacts/fetchRequest');

export const fetchContactsSuccess = createAction('contacts/fetchSuccess');

export const fetchContactsError = createAction('contacts/fetchError');
