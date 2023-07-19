import React from 'react';
// import { Link } from 'react-router-dom';
import Header from './Header/Header'
import EquipmentContainer from './Equipment/EquipmentContainer';

const Equipment = () => {
  return (
    <div>
      <Header />
      <EquipmentContainer />
      {/* Додайте вміст вашої сторінки Продуктів */}
    </div>
  );
};

export default Equipment;