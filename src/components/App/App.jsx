import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from 'components/GlobalStyle';
import { Container } from './App.styled';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

const LS_KEY = 'contacts';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem(LS_KEY));
    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }

  addContact = (newName, number) => {
    const isNotUnique = this.state.contacts.some(
      ({ name }) => name === newName
    );
    if (isNotUnique) {
      return alert(`${newName} is already in contacts.`);
    }
    const newContact = {
      id: nanoid(),
      name: newName,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  editContact = updateContact => {
    this.setState(({ contacts }) => ({
      contacts: contacts.map(contact => {
        if (contact.id === updateContact.id) {
          return updateContact;
          // const newContact = { ...contact, ...updateContact };
          // return newContact;
        }
        return contact;
      }),
    }));
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  filterList = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    const visibleContacts = contacts.filter(contast =>
      contast.name.toLocaleLowerCase().includes(normalizedFilter)
    );
    return visibleContacts;
  };

  render() {
    const { filter } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={this.filterList()}
          onDeleteContact={this.deleteContact}
          onEditContact={this.editContact}
        />
        <GlobalStyle />
      </Container>
    );
  }
}

export default App;
