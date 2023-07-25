import React from 'react';
// import { Link } from 'react-router-dom';
// import Production from './Production/Production'
import TitleSection from '../components/TitleSection/TitleSection'
import Content from '../components/Projects/Content/Content'

const Projects = () => {
  return (
    <div>
      {/* <Production /> */}
      <TitleSection title="Продукція" />
      <Content  />
      {/* Додайте вміст вашої сторінки Продуктів */}
    </div>
  );
};

export default Projects;