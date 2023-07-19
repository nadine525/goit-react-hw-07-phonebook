import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../services/contacts-api';

export const getContacts = createAsyncThunk(
  `contacts/getContacts`,
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  `contacts/postContact`,
  async (_, { rejectWithValue }) => {
    try {
      const contact = await contactsAPI.addContact();
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
