import styled from 'styled-components';

export const Section = styled.section`
    position: relative;
    margin: 0;
    padding: 0;
    display: block;
`;

export const Container = styled.div`
    padding: 0 20px 20px 25px;
    position: relative;
    max-width: 1170px;
    align-items: center;
`;

export const Title = styled.h2`
    color: #9AC43C;
    margin: 32px 0 32px 0;
    font-size: 42px;
    @media screen and (max-width: 780px) {
        line-height: 1.2em;
        font-size: 28px;
    }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  @media screen and (max-width: 480px) {
    align-items: stretch;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Label = styled.label`
  width: 100px;
  color: #000;
`;

export const Input = styled.input`
    max-width: 300px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #cccccc;
  @media screen and (min-width: 481px) {
    width: 300px;
  }
`;

export const Textarea = styled.textarea`
    max-width: 300px;
  height: 150px;
  padding: 8px;
  resize: none;
  user-select: text;
  border-radius: 4px;
  border: 1px solid #cccccc;
  @media screen and (min-width: 481px) {
    width: 300px;
  }
`;

export const SubmitButton = styled.button`
  width: 100px;
  padding: 8px;
  background-color: #9AC43C;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;