import React from 'react';
import Header from '../Header/Header'
import { Section, Container, Title } from './Question.styled'

const Vacancies = () => {
  return (
    <div>
      <Header />
      <Section>
        <Container>
            <Title>Вакансії</Title>
        </Container>
      </Section>
      {/* Додайте вміст вашої сторінки Продуктів */}
    </div>
  );
};

export default Vacancies;