import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import shortid from "shortid";
import styles from './ContactForm.module.css';
import { addContact } from "redux/ContactsOperations";
import { postContacts } from "redux/ContactsActions";
// import { onAdd } from "../../redux/ContactsReducer";

const { labelStyles } = styles;

export default function ContactForm() {

    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.list);
    console.log(contacts);
    
    useEffect(() => {}, [])

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleInput = (e) => {
        const {name, value} = e.target;

        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                return;
        }
}    

    const reset = () => {
        setName('');
        setNumber('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(contacts)

        dispatch(addContact(name, number))
        // const checkName = contacts.find(el => (el.name.toLowerCase() === name.trim().toLowerCase()));
        // const checkNumber = contacts.find(el => (el.number === number.trim()));
        
        // console.log(checkName);
        //         console.log(checkNumber);

        // if (!checkName || !checkNumber) {

            
            // return dispatch(onAdd({
            //     id: shortid.generate(), 
            //     name, 
            //     number
            // }));
            console.log(contacts)
        }

        // alert('Sorry, but you already have equal contacts')
        // reset();
    // }

    return (
        <form onSubmit={handleSubmit}>
            <label className={labelStyles}>
            Name
            <input
                value={name}
                onChange={handleInput}
                autoComplete='off'
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            </label>
            
            <label className={labelStyles}>
            Number
            <input
                value={number}
                onChange={handleInput}
                autoComplete='off'
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            </label>
            
            <button type="submit">Add contact</button>
        </form>
    )
}
