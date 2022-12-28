import React, { Component } from "react";
import {Forma}   from './Forma/Forma';
import { Container } from "./App.styled";
import { Contact } from "./Contact/Contact";
import { Filter } from "./Filter/Filter";

import { nanoid } from 'nanoid';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    
  };
  formSubmit = ({ name, number }) => {
    const { contacts } = this.state;
    let newContact = {
      id: nanoid(),
      name,
      number,
    };
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`)
        return;
    };
    this.setState(({contacts}) => ({
      contacts: [newContact, ...contacts],
    }));
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== id)
    }))
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact=>
       contact.name.toLowerCase().includes(normalizedFilter))
  }
  
  render() {
    {
      const { filter } = this.state;

      

      const contactsFilter = this.filterContacts();
      return (
        <Container>
          <h1>Phonebook</h1>
          <Forma onSubmit={this.formSubmit} />
          <h2>Contacts</h2>
          <Filter filter={filter} onChange={this.changeFilter}/>
          <Contact contacts={contactsFilter}
            onClick={this.deleteContact} />
        </Container>
     
      );
     
       
     
      
    
    };


  }
}


