import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../services/contacts-api';
import { toast } from 'react-toastify';

export const getContacts = createAsyncThunk(
  `contacts/getContacts`,
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.fetchContacts();
      return contacts;
    } catch (error) {
      toast.error('Sorry! There is an error.');
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  `contacts/postContact`,
  async (newContact, { rejectWithValue }) => {
    try {
      const contact = await contactsAPI.addContact(newContact);
      return contact;
    } catch (error) {
      toast.error('Sorry! There is an error.');
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  `contacts/deleteContact`,
  async (contactId, { rejectWithValue }) => {
    try {
      const deletedContact = await contactsAPI.deleteContact(contactId);
      console.log(deletedContact.id);

      return deletedContact.id;
    } catch (error) {
      toast.error('Sorry! There is an error.');
      return rejectWithValue(error);
    }
  }
);
