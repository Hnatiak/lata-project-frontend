import React from 'react';
import Rewiews from '../components/FeedbackPage/Rewiews'
import TitleSection from '../components/TitleSection/TitleSection';

const Feedback = () => {
  return (
    <>
      <TitleSection title="Відгуки" />
      <Rewiews />
      {/* Додайте вміст вашої сторінки Продуктів */}
    </>
  );
};

export default Feedback;