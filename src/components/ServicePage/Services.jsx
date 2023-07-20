import React from 'react';
// import { Link } from 'react-router-dom';
import ServicesContainer from './Services/ServicesContainer'
import PrintingServices from './PrintingServices/PrintingServices'

const Services = () => {
  return (
    <div>
      <ServicesContainer />
      <PrintingServices />
      {/* Додайте вміст вашої сторінки Продуктів */}
    </div>
  );
};

export default Services;