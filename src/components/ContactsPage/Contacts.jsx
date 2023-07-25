import React from 'react';
// import { Link } from 'react-router-dom';
import GoogleMaps from './GoogleMaps/GoogleMaps';
import TitleSection from '../TitleSection/TitleSection';

const Contacts = () => {
  return (
    <div>
      <TitleSection title="Контакти" />
      <GoogleMaps />
      {/* Додайте вміст вашої сторінки Продуктів */}
    </div>
  );
};

export default Contacts;