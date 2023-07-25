import React from 'react';
import Rewiews from '../components/FeedbackPage/Rewiews/Rewiews'
import TitleSection from '../components/TitleSection/TitleSection';

const Feedback = () => {
  return (
    <div>
      <TitleSection title="Відгуки" />
      <Rewiews />
      {/* Додайте вміст вашої сторінки Продуктів */}
    </div>
  );
};

export default Feedback;