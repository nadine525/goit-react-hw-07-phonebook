import React, { useEffect } from 'react';
import ContactElement from '../ContactElement';
import { List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import * as contactsOperations from '../../redux/operations';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  // console.log(contacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  console.log(contacts);

  const getVisibleContacts = () => {
    const normalazedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalazedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <List>
      {visibleContacts.length > 0 ? (
        visibleContacts.map(({ id, name, number }) => {
          return (
            <ContactElement key={id} id={id} name={name} number={number} />
          );
        })
      ) : (
        <p>Let's start creating your phonebook! </p>
      )}
    </List>
  );
};

export default ContactList;
