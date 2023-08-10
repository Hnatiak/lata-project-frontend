import React from 'react';
import TitleSection from '../components/TitleSection/TitleSection';
import BuyBoxs from 'components/Buy/buy';
// import { Link } from 'react-router-dom';

const Articles = () => {
  return (
    <div>
      <TitleSection title="Покупка" />
      <BuyBoxs />
      
      {/* Додайте вміст вашої сторінки Продуктів */}
    </div>
  );
};

export default Articles;