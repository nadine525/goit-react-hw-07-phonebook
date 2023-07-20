import { useEffect } from 'react';
import ContactElement from '../ContactElement';
import { List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';
import * as contactsOperations from '../../redux/operations';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  // console.log(contacts);

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
