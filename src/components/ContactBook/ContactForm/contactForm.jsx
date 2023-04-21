import React from 'react';
import css from './contactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
// import {addContact} from '../../redux/contactsSlice'
import { selectContactsState } from '../../../redux/contacts/selectors';
import { addContact } from '../../../redux/contacts/operations';
import { nanoid } from '@reduxjs/toolkit';
import toast, { Toaster } from 'react-hot-toast';

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsState);

  const handleSubmit = event => {
    event.preventDefault();
    // запись инпутов
    const form = event.currentTarget;
    const nameContact = form.name.value;
    const numberContact = form.number.value;

    // создание объекта для axios.post
    const contactData = {
      createdAt: new Date().toISOString(),
      name: nameContact,
      number: numberContact,
      id: nanoid(),
    };

    // запись всех имен в массив
    let allNameContact = [];
    contacts.forEach(contact =>
      allNameContact.push(contact.name.toLocaleLowerCase())
    );
    // если имя из массива совпадает, то Alert если нет, добавка в state через  action 'addContact'
    allNameContact.includes(nameContact.toLocaleLowerCase())
      ? toast.error(`"${nameContact}" is already in contacts!`)
      : dispatch(addContact(contactData));

    form.reset();
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label className={css.lable}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          onChange={e => e.currentTarget.value}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <lable className={css.lable}>
        {' '}
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          onChange={e => e.currentTarget.value}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </lable>
      <button className={css.addBtn} type="submit">
        Add contact
      </button>
    </form>
    <Toaster/></>
  );
}

export { ContactForm };
