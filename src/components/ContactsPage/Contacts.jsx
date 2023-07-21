import React from 'react';
// import { Link } from 'react-router-dom';
import ContactsContainer from './Contacts/ContactsContainer';
import GoogleMaps from './GoogleMaps/GoogleMaps';

const Contacts = () => {
  return (
    <div>
      <ContactsContainer />
      <GoogleMaps />
      {/* Додайте вміст вашої сторінки Продуктів */}
    </div>
  );
};

export default Contacts;