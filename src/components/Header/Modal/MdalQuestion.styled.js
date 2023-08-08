import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  z-index: 5;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s linear, top 0.3s ease-out;
`;

export const ModalTitle = styled.div`
  background-color: #9ac43c;
  padding: 25px 15px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 12px 12px 0 0;
  @media screen and (max-width: 480px) {
    padding: 15px 10px;
  }
`;

export const Settings = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h4`
  background: #9ac43c;
  color: #fff;
  font-size: 28px;
  margin-bottom: 0px;
  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Container = styled.div`
  position: relative;
  max-height: 400px;
  padding: 15px 15px 35px 15px;
  justify-content: space-around;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    padding: 15px 15px 25px 15px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 480px) {
    width: 100%;
    align-items: stretch;
    gap: 10px;
  }
`;

export const FormDiv = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Label = styled.label`
  margin: 5px 15px 0 0;
  font-weight: bold;
`;

export const Input = styled.input`
  background-color: #ffffff;
  border: 1px solid #cccccc;
  max-width: 100%;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition: border linear 0.2s, box-shadow linear 0.2s;
  height: 20px;
  padding: 4px 6px;
  font-size: 14px;
  line-height: 20px;
  color: #555555;
  vertical-align: middle;
  border-radius: 4px;
  @media screen and (min-width: 481px) {
    width: 220px;
  }
`;

export const Textarea = styled.textarea`
  background-color: #ffffff;
  border: 1px solid #cccccc;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition: border linear 0.2s, box-shadow linear 0.2s;
  height: auto;
  padding: 4px 6px;
  font-size: 14px;
  user-select: text;
  max-width: 100%;
  line-height: 20px;
  color: #555555;
  vertical-align: middle;
  border-radius: 4px;
  resize: none;
  @media screen and (min-width: 481px) {
    width: 220px;
  }
`;

export const ModalContentStyle = styled.div`
  border-radius: 12px;
  top: 10%;
  left: 50%;
  z-index: 1050;
  width: 560px;
  background-color: #ffffff;
  @media screen and (max-width: 589px) {
    width: 95%;
  }
  // @media screen and (max-width: 480px) {
  //     width: 95%;
  // }
`;

export const Svg = styled(FontAwesomeIcon)`
  position: relative;
  margin-right: 15px;
  color: white;
  font-size: 4em;
  @media screen and (max-width: 480px) {
    font-size: 3em;
  }
`;

export const CloseBtnStyle = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
`;

export const BtnSend = styled.button`
  font-size: 16px;
  text-transform: uppercase;
  text-shadow: none;
  border: none;
  padding: 8px 22px;
  box-shadow: none;
  background: #9ac43c;
  border-radius: 4px;
  @media screen and (max-width: 480px) {
    padding: 4px 18px;
    font-size: 14px;
  }
`;
