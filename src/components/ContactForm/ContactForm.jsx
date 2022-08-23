import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { useAddContactMutation } from "redux/ContactsAPI";
import axios from 'axios';
import shortid from "shortid";
import styles from './ContactForm.module.css';
import { useGetContactsQuery } from "redux/ContactsAPI";
// import { addContact } from "redux/ContactsOperations";
// import { postContacts } from "redux/ContactsActions";
// import { onAdd } from "../../redux/ContactsReducer";

const { labelStyles } = styles;

export default function ContactForm() {

    const [addContact] = useAddContactMutation();
    const {data} = useGetContactsQuery();
    console.log(data)

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

    let include = false

    const handleSubmit = async (e) => {
        e.preventDefault();
        reset();
        
        for (const el of data) {
            if (el.name === name && el.phone === number) {
                include = true;
                alert('such contact already exist');
                break;
            }
        }    
        

        if (!include) {
            await addContact({name, phone: number});
        }
    }

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
