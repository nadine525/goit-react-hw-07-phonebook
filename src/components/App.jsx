import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import { Division } from './App.styled';


export function App() {

  return (
     <Division>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Division>
  )
};
