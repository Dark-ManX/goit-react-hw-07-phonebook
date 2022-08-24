import PropTypes from 'prop-types';
// import axios from 'axios';
// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGetContactsQuery, useDeleteContactQuery, useDeleteContactMutation } from 'redux/ContactsAPI'; 
// import { fetchContacts, deleteContact } from 'redux/ContactsOperations';
import RenderContact from 'components/RenderContact/RenderContact';

const ContactList =  () => {

    const {data:contacts, error, isLoading} = useGetContactsQuery();
    const filter = useSelector(state => state.filter);

    const getFilteredData = (data) => {
        if (data) {
            return contacts.filter(({name}) => name.toLowerCase().includes(data))
        }
        return contacts;
    };

    const filteredContacts = getFilteredData(filter);    

    const [removeContact] = useDeleteContactMutation();

    const deleteContact = (itemId) => removeContact(itemId);



    return (
        <>
            {contacts && (
                <ul>
                {filteredContacts.map(({id, name, phone}) => (<RenderContact key={id} name={name} number={phone} onDeleteContact={() => deleteContact(id)}/>))}
                </ul>
            )}

            {error && (<p>{error}</p>)}

            {isLoading && (<p>Loading...</p>)}
        </>
    )
}


export default ContactList;

ContactList.propTypes = {
    data: PropTypes.array,
    id: PropTypes.string,
}
