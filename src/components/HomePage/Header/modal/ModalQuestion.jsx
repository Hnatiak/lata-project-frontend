import React, { useState, useEffect } from 'react';
import { ModalStyle, ModalContentStyle, CloseBtnStyle, Title} from './ModalQuestion.styled'

const ModalQuestion = ({ closeModal }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Додати логіку для обробки відправки форми
    console.log('Submit form:', name, email, question);
    closeModal();
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }); // Передаємо порожній масив залежностей, щоб обробник подій був доданий лише один раз при монтуванні компонента

  return (
    <ModalStyle>
      <ModalContentStyle>
        <Title>Задати питання</Title>
        <form onSubmit={handleSubmit}>
          <label>
            Ім'я
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label> E-mail
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label> Питання
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            />
          </label>
          <button type="submit">Відправити</button>
        </form>
        <CloseBtnStyle onClick={closeModal}>Close</CloseBtnStyle>
      </ModalContentStyle>
    </ModalStyle>
  );
};

export default ModalQuestion;