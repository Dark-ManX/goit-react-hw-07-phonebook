import PropTypes from 'prop-types';
// import axios from 'axios';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useGetContactsQuery, useDeleteContactQuery, useDeleteContactMutation } from 'redux/ContactsAPI'; 
// import { fetchContacts, deleteContact } from 'redux/ContactsOperations';
import RenderContact from 'components/RenderContact/RenderContact';

const ContactList =  ({contactsData}) => {

    const {data, error, isLoading} = useGetContactsQuery();
    // contactsData(data);
    // console.log(contactsData)

    const [removeContact] = useDeleteContactMutation();

    const deleteContact = (itemId) => removeContact(itemId);



    return (
        <>
            {data && (
                <ul>
                {data.map(({id, name, phone}) => (<RenderContact key={id} name={name} number={phone} onDeleteContact={() => deleteContact(id)}/>))}
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
