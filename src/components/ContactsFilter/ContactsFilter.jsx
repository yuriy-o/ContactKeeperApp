import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { getFilter } from 'redux/contacts/selectors';
import { Input, Label, Text } from './ContactsFilter.styled';
// import { Hr } from 'components/ContactForm/ContactForm.styled';

export const ContactsFilter = React.memo(() => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onFilterChange = useCallback(
    e => {
      dispatch(setFilter(e.target.value));
    },
    [dispatch]
  );

  return (
    <>
      <Label>
        <Text>Find contacts by name</Text>
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={onFilterChange}
          placeholder="Enter a name to search for"
          required
        />
      </Label>
      {/* <Hr></Hr> */}
    </>
  );
});
