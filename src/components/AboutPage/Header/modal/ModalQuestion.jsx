import React, { useEffect } from 'react';
import { ModalStyle, ModalContentStyle, CloseBtnStyle, Title, BtnSend, ModalTitle, Settings, Container, Form, FormDiv, Label, Input, Textarea} from './ModalQuestion.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion  } from '@fortawesome/free-solid-svg-icons';

const ModalQuestion = ({ closeModal }) => {

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
  });

  return (
    <ModalStyle>
      <ModalContentStyle>
      <ModalTitle>
        <CloseBtnStyle onClick={closeModal}>✖</CloseBtnStyle>
        <Settings>
          <FontAwesomeIcon icon={faCircleQuestion} style={{ position: 'relative', marginRight: 15, color: 'white', fontSize: '4em' }} />
          <Title>Задати питання</Title>
        </Settings>
      </ModalTitle>
      <Container>
        <Form>
            <FormDiv>
                <Label>Ім'я<span>*</span></Label>
                <div>
                    <Input type="text" name="user_name" id="inputEmail" placeholder="Іван Іванович" value=""/>
                </div>
            </FormDiv>
            <FormDiv>
                <Label>E-mail<span>*</span></Label>
                <div>
                    <Input type="text" id="inputSignupPassword" placeholder="example@mail.ua" name="user_email" value="" />
                </div>
            </FormDiv>
            <FormDiv>
              <Label>Питання<span>*</span></Label>
                <div>						
                    <Textarea rows="5" name="MESSAGE" placeholder="Зміст питання"></Textarea>
                </div>
            </FormDiv>
          </Form>
          <BtnSend>Надіслати</BtnSend>
        </Container>
      </ModalContentStyle>
    </ModalStyle>
  );
};

export default ModalQuestion;