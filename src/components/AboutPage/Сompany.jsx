import React from 'react';
// import { Outlet } from 'react-router-dom';
import AboutUsContainer from './AboutUs/AboutUsContainer';
import AboutUsCompany from './AboutUsCompany/AboutUsCompany';

const Company = () => {
  return (
    <div>
      <AboutUsContainer />
      <AboutUsCompany />
      {/* Додайте вміст вашої сторінки Продуктів */}
      {/* <Outlet /> */}
    </div>
  );
};

export default Company;