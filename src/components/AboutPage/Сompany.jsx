import React from 'react';
// import { Outlet } from 'react-router-dom';
import Header from './Header/Header'
import AboutUsContainer from './AboutUs/AboutUsContainer';

const Company = () => {
  return (
    <div>
      <Header />
      <AboutUsContainer />
      {/* Додайте вміст вашої сторінки Продуктів */}
      {/* <Outlet /> */}
    </div>
  );
};

export default Company;