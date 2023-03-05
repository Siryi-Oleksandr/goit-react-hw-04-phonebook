import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from 'components/GlobalStyle';
import { Container } from './App.styled';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import toast, { Toaster } from 'react-hot-toast';
import useLocaleStorage from '../../hooks/useLocaleStorage';

const LS_KEY = 'contacts';

function App() {
  const [contacts, setContacts] = useLocaleStorage(LS_KEY, []);
  const [filter, setFilter] = useState('');

  const addContact = (newName, number) => {
    const isNotUnique = contacts.some(({ name }) => name === newName);
    if (isNotUnique) {
      return toast.success(`"${newName}" is already in contacts.`);
    }
    const newContact = {
      id: nanoid(),
      name: newName,
      number,
    };
    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const editContact = updateContact => {
    setContacts(prevContacts =>
      prevContacts.map(contact => {
        if (contact.id === updateContact.id) {
          return updateContact;
        }
        return contact;
      })
    );
  };

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const filterList = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
    return visibleContacts;
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={filterList()}
        onDeleteContact={deleteContact}
        onEditContact={editContact}
      />

      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
      <GlobalStyle />
    </Container>
  );
}

export default App;
