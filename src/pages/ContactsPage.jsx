import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter';
import { Container, H1, H2 } from './ContactsPage.styled';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <Container>
        <H1>Phonebook</H1>
        <ContactForm />
        <H2>Contacts</H2>
        <div>
          <ContactsFilter />
          {isLoading && !error && <b>Request in progress...</b>}
          <ContactList />
        </div>
      </Container>
    </main>
  );
};

export default ContactsPage;
