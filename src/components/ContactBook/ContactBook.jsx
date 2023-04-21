import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import css from './ContactBook.module.css';

import { ContactForm } from './ContactForm/contactForm';
import { Filter } from './Filter/filter';
import { ContactList } from './ContactList/contactList';
import { selectContactsState } from '../../redux/contacts/selectors';
export const ContactBook = () => {
  const contacts = useSelector(selectContactsState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  console.log('contacts', contacts);
  return (
    <div className={css.conteinerApp}>
      <h2 className={css.title}>Phonebook </h2>
      <ContactForm />
      <div>
        <h2 className={css.title}>
          Total contacts in book : {contacts.length}{' '}
        </h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};
