import axios from 'axios';
import shortid from 'shortid';
import * as actions from './ContactsActions';

axios.defaults.baseURL = 'https://62ff71d634344b6431f996b1.mockapi.io';

export const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(actions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactsError(error));
  }
};

export const addContact = (name, phone) => async dispatch => {
  dispatch(actions.fetchContactsRequest());

  try {
    const { data } = await axios.post('/contacts', {
      name,
      phone,
    });
    console.log(typeof data.id);
    dispatch(actions.postContacts(data));
  } catch (error) {
    dispatch(actions.fetchContactsError(error));
  }
};

export const deleteContact = id => async dispatch => {
  dispatch(actions.fetchContactsRequest());

  try {
    const data = await axios.delete(`/contacts`);
    console.log(data);
    dispatch(actions.deleteContact(data));
  } catch (error) {
    dispatch(actions.fetchContactsError(error));
  }
};
