import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter';
import { Box } from './ContactsPage.styled';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main sx={{ bgcolor: 'background.default' }}>
      <Box>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <div>
          <ContactsFilter />
          {isLoading && !error && <b>Request in progress...</b>}
          <ContactList />
        </div>
      </Box>
    </main>
  );
};

export default ContactsPage;
