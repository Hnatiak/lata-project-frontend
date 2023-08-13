import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MenuContainer = styled.div`
  padding: 35px 25px;
  justify-content: flex-start;

  img {
    width: 500px;
    margin-bottom: 25px;
  }
  @media screen and (max-width: 480px) {
    display: block;
  }
`;

export const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 25px;
  gap: 25px;
  align-items: center;
  user-select: none;
  margin-bottom: 25px;

  span:nth-of-type(1) {
    color: red;
    cursor: pointer;
    padding: 0 5px;
  }

  input {
    border: none;
    background: none;
    font-size: inherit;
    padding: 0;
    appearance: none;
    max-width: 10000px;
    width: ${(props) => (props.quantityLength + 1) * 15}px;
    text-align: center;
    outline: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  span:nth-of-type(2) {
    color: green;
    cursor: pointer;
    padding: 0 5px;
  }
`;

export const ContainerDiv = styled.div`
    border-left: 1px solid #e9e9e9;
    padding: 0 0 0 30px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    @media screen and (max-width: 780px) {
        border-left: none;
        padding: 0 0;
    }
`;

export const News = styled.h5`
    border-bottom: #e9e9e9 1px solid;
    padding-bottom: 9px;
    margin-bottom: 20px;
    font-size: 24px;
`;

export const ContainerP = styled.p`
    text-align: justify;
    color: #656565;
    font-size: 16px;
`;

export const CartIcon = styled(FontAwesomeIcon)`
  margin-right: 8px; /* Відступ справа від тексту "КУПИТИ" */
`;

export const ButtonShop = styled.button`
  background: #9AC43C;
  color: #fff;
  padding: 5px 20px;
  font-size: 15px;
  border-radius: 20px;

&:hover {
  background: #8ac930;
}

&:active {
  background: #8ac930;
  top: 2px;
}

&:before {
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  line-height: 3;
  font-size: 140%;
  width: 60px;
}
`;

export const Settings = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 480px) {
    display: block;
  }
`;