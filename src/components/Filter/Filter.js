import React from 'react';
import { Label } from './Filter.styled';
import { Input } from '../ContactForm/ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <Label>
      Find Contacts by name
      <Input type="text" value={filter} onChange={changeFilter} />
    </Label>
  );
};

export default Filter;
