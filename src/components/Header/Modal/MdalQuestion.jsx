import { useEffect } from 'react';
import {
  ModalStyle,
  ModalContentStyle,
  CloseBtnStyle,
  Svg,
  Title,
  BtnSend,
  ModalTitle,
  Settings,
  Container,
  Form,
  FormDiv,
  Label,
  Input,
  Textarea,
} from './MdalQuestion.styled';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

const MdalQuestion = ({ closeModal }) => {
  const handleKeyDown = e => {
    if (e.keyCode === 27) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <ModalStyle>
      <ModalContentStyle>
        <ModalTitle>
          <Settings>
            <Svg icon={faCircleQuestion} />
            <Title>Задати питання</Title>
          </Settings>
          <CloseBtnStyle onClick={closeModal}>✖</CloseBtnStyle>
        </ModalTitle>
        <Container>
          <Form>
            <FormDiv>
              <Label>
                Ім'я<span>*</span>
              </Label>
              <Input type="name" name="user_name" placeholder="Іван Іванович" />
            </FormDiv>
            <FormDiv>
              <Label>
                E-mail<span>*</span>
              </Label>
              <Input type="email" placeholder="example@mail.ua" name="user_email" />
            </FormDiv>
            <FormDiv>
              <Label>
                Питання<span>*</span>
              </Label>
              <Textarea rows="5" name="MESSAGE" placeholder="Зміст питання"></Textarea>
            </FormDiv>
          </Form>
          <BtnSend>Надіслати</BtnSend>
        </Container>
      </ModalContentStyle>
    </ModalStyle>
  );
};

export default MdalQuestion;
