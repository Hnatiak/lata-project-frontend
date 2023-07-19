import React from 'react';
import Header from '../Header/Header'
import { Section, Container, Title } from './Question.styled'

const Question = () => {
  return (
    <div>
    <Header />
    <Section>
      <Container>
          <Title>Часті питання</Title>
      </Container>
    </Section>
    </div>
  );
};

export default Question;