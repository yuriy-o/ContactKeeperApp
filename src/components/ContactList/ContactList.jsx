import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectContacts, getFilter } from 'redux/contacts/selectors';

import { GridWrapper, Li, Name, Number } from './ContactList.styled';
import './ContactList.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(getFilter);

  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ol>
      {filteredContacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          onDeleteContact={handleDeleteContact}
        />
      ))}
    </ol>
  );
};

const Contact = ({ contact, onDeleteContact }) => {
  const { id, name, number } = contact;

  return (
    <>
      <Li>
        <GridWrapper>
          <Name>{name}:</Name>
          <Number>{number}</Number>
        </GridWrapper>

        <button
          className="btn-delete btn-rotating"
          onClick={() => onDeleteContact(id)}
          type="button"
        >
          <span>Are you sure?</span>
          <span>Delete</span>
        </button>
      </Li>
    </>
  );
};
