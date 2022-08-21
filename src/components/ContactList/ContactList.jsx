import PropTypes from 'prop-types';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from 'redux/ContactsOperations';
import RenderContact from 'components/RenderContact/RenderContact';

const ContactList = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.items);
    console.log(contacts)
    // const filter = useSelector(state => state.filter);
    // console.log(filter);
    // const makeContactsFilter = filterName => {
    //     if (filterName) {
    //         return contacts.filter(
    //             ({name}) => name.toLowerCase().includes(filterName))
                
    //     }
    //     return contacts;
    // }

    useEffect(() => {dispatch(fetchContacts())}, [dispatch])
    
    // const filteredContacts = makeContactsFilter(filter);
    // console.log(filteredContacts)

    const deleteContact = (itemId) => console.log(axios.delete(`/contacts/${itemId}`));
    

    return (

        <ul>
            {contacts.map(({id, name, number}) => (<RenderContact key={id} name={name} number={number} onDeleteContact={() => deleteContact(id)}/>))}
        </ul>
    )
}


export default ContactList;

ContactList.propTypes = {
    data: PropTypes.array,
    id: PropTypes.string,
}
