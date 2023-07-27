import React from 'react';
// import { Outlet } from 'react-router-dom';
import AboutUsCompany from '../components/About/AboutUsCompany/AboutUsCompany';
import TitleSection from '../components/TitleSection/TitleSection';
// import { useParams } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      <TitleSection title="Про компанію" />
      <AboutUsCompany />
      {/* Додайте вміст вашої сторінки Продуктів */}
      {/* <Outlet /> */}
    </div>
  );
};

export default AboutPage;