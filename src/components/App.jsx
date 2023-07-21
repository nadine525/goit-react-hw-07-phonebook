import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Loader from './Loader';

import { Division } from './App.styled';
import { selectIsLoading} from 'redux/selectors';

import { useSelector } from 'react-redux';

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



export function App() {
  const isLoadingFlag = useSelector(selectIsLoading);
  // const isError = useSelector(selectError);


  return (
     <Division>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      {<ContactList />}
      {isLoadingFlag && <Loader />}
      <ToastContainer autoClose={3000} limit={1} theme='dark' />
    </Division>
  )
};
