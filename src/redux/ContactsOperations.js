import axios from 'axios';
import * as actions from './ContactsActions';

axios.baseURL = 'https://62ff71d634344b6431f996b1.mockapi.io';

const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactsRequest());

  try {
    const contacts = await axios.get();
    dispatch(actions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(actions.fetchContactsError(error));
  }
};
