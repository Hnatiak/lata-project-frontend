import React from 'react';
// import { Link } from 'react-router-dom';
import Header from './Header/Header'
import ContactsContainer from './Contacts/ContactsContainer';

const Contacts = () => {
  return (
    <div>
      <Header />
      <ContactsContainer />
      {/* Додайте вміст вашої сторінки Продуктів */}
    </div>
  );
};

export default Contacts;