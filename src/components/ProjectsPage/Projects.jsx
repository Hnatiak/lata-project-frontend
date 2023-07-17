import React from 'react';
// import { Link } from 'react-router-dom';
import Header from './Header/Header'
import Production from './Production/Production'
import Content from './Content/Content'

const Projects = () => {
  return (
    <div>
      <Header />
      <Production />
      <Content />
      {/* Додайте вміст вашої сторінки Продуктів */}
    </div>
  );
};

export default Projects;