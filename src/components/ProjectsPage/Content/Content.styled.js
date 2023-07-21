import styled from '@emotion/styled';
import { Link } from 'react-router-dom'; // NavLink

export const MenuContainer = styled.div`
  max-width: 1170px;
  margin-left: 25px;
`;

export const MenuUl = styled.ul`
  display: flex;
  gap: 15px;
  margin: 30px 0 30px 0;
`;

export const MenuLinkActive = styled(Link)(({ selected }) => ({
  fontSize: '13px',
  fontWeight: '700',
  color: selected ? '#9AC43C' : '#111',
  display: 'flex',
  alignItems: 'center'
}));

export const MenuItem = styled.li`
  font-size: 13px;
  font-weight: 700;
  color: #111;
  z-index: 2;
`;



export const FilterContainer = styled.div`
  position: absolute;
  top: 30px; /* Розташовуємо фільтр знизу від посилання "Всі" */
  right: 0;
  width: 150px;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 2;
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  transition: opacity 0.3s, visibility 0.3s;
  padding: 8px;
  display: flex;
  flex-direction: column;
`;

export const FilterItem = styled(Link)`
  color: #111;
  text-decoration: none;
  padding: 4px 0;
  &:hover {
    color: #9ac43c;
  }
`;

























export const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Змінено ширину колонок на 250px */
  gap: 25px;
  margin: 25px;
  align-items: center;
  @media screen and (max-width: 780px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Project = styled.div`
  border: 1px solid #e6e6e6;
  display: flex;
  justify-content: center; /* Центрування по горизонталі */
  align-items: center; /* Центрування по вертикалі */
  height: 250px;

  // img {
  //   max-width: 100%;
  //   max-height: 100%;
  // }
  // img {
  //   max-width: 100%;
  //   max-height: 100%;
  //   transition: opacity 0.3s ease-in-out;
  // }

  &:hover img {
    opacity: 0.8;
  }

  &:hover::before {
    content: '';
    cursor: pointer;
    position: absolute;
    // top: 0;
    // left: 0;
    width: 280px;
    height: 250px;
    background-color: #9AC43C;
    opacity: 0.8;
    z-index: 1;
  }
`;