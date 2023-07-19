import React from 'react';
// import { Link } from 'react-router-dom';
import Header from './Header/Header'
import NewsContainer from './News/NewsContainer';

const News = () => {
  return (
    <div>
      <Header />
      <NewsContainer />
      {/* Додайте вміст вашої сторінки Продуктів */}
    </div>
  );
};

export default News;