import React, { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';
import './App.css';
import Header from './Components/header/Header';
import Addcontact from './Components/addcontact/Addcontact';
import Contactlist from './Components/contactlist/Contactlist';
// import ContactCard from './Components/contactcard/ContactCard';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactsHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };
   
  useEffect(() => {
   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
   if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts]);

  return (
    <div className="ui container">
       <Header />
       <Addcontact addContactHandler={addContactHandler}/>
       <Contactlist contacts={contacts} getContactId={removeContactsHandler}/>
    </div>
  );
}

export default App;
