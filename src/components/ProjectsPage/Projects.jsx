import React from 'react';
// import { Link } from 'react-router-dom';
import Production from './Production/Production'
import Content from './Content/Content'

const Projects = () => {
  return (
    <div>
      <Production />
      <Content />
      {/* Додайте вміст вашої сторінки Продуктів */}
    </div>
  );
};

export default Projects;