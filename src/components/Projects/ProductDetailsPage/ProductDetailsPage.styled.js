import styled from '@emotion/styled';
import { Link } from 'react-router-dom'; // NavLink
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MenuContainer = styled.div`
  padding: 35px 25px;
  display: grid;

  // gap: 105px 0px;
  grid-template-columns: repeat(3, 1fr); // 2
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
  span:nth-child(1) {
    color: red;
    cursor: pointer;
    padding: 0 5px;
  }

  input {
    border: none;
    background: none;
    font-size: inherit;
    padding: 0;
    appearance: none; /* Remove default styling in some browsers */
    max-width: 10000px;
    width: ${(props) => (props.quantityLength + 1) * 15}px;
    text-align: center; /* Center the text horizontally */
    outline: none; /* Remove the outline when the input is focused */
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none; /* Remove spinner buttons in Chrome */
    margin: 0;
  }

  span:nth-child(3) {
    color: green;
    cursor: pointer;
    padding: 0 5px;
  }
`;

export const ContainerDiv = styled.div`
    border-left: 1px solid #e9e9e9;
    padding: 0 0 0 30px;
    max-width: 370px;
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
`;

export const CartIcon = styled(FontAwesomeIcon)`
  margin-right: 8px; /* Відступ справа від тексту "КУПИТИ" */
`;

export const ButtonShop = styled(Link)`
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