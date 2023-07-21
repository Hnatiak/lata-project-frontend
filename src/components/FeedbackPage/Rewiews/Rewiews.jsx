import React from 'react';
import { Section, Container, Title, Form, InputWrapper, Label, Input, Textarea, SubmitButton } from './Rewiews.styled'

const Reviews = () => {
  return (
    <Section>
      <Container>
        <div style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center' }}>
            {/* <Title>Тут ви можете залишити свій відгук</Title> */}
            <Title>Залишити відгук</Title>
        </div>
        <Form>
          <InputWrapper>
            <Label>Ім'я:</Label>
            <Input type="text" placeholder="Ім'я" />
          </InputWrapper>
          <InputWrapper>
            <Label placeholder="Email">Емейл:</Label>
            <Input type="email" placeholder="Емейл" />
          </InputWrapper>
          <InputWrapper>
            <Label>Коментар:</Label>
            <Textarea placeholder="Залиште свій коментар"/>
          </InputWrapper>
          <SubmitButton type="submit">Надіслати</SubmitButton>
        </Form>
      </Container>
      <Container>
        <div style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center' }}>
            <Title>Відгуки про нас</Title>
        </div>
        <div></div>
      </Container>
    </Section>
  );
};

export default Reviews;