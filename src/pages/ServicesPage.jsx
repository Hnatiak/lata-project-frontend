import React from 'react';
// import { Link } from 'react-router-dom';
// import ServicesContainer from './Services/ServicesContainer'
import PrintingServices from '../components/Service/PrintingServices/PrintingServices'
import TitleSection from '../components/TitleSection/TitleSection';

const Services = () => {
  return (
    <div>
      {/* <ServicesContainer /> */}
      <TitleSection title="Послуги поліграфії" />
      <PrintingServices />
      {/* Додайте вміст вашої сторінки Продуктів */}
    </div>
  );
};

export default Services;