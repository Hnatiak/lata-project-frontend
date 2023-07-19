import styled from '@emotion/styled';
import { Link } from 'react-router-dom'; // NavLink

export const MenuContainer = styled.div`
  width: 1170px;
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
}));

export const MenuItem = styled.li`
  font-size: 13px;
  font-weight: 700;
  color: #111;
`;

// export const MenuLink = styled(Link)` // NavLink
//   font-size: 13px;
//   color: #111;
//   &:hover {
//     color: #9AC43C;
//   }
// `;

export const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin: 25px;
  align-items: center;
`;

export const Project = styled.div` // NavLink
  border: 1px solid #e6e6e6;
  display: flex;
  justify-content: center; /* Центрування по горизонталі */
  align-items: center; /* Центрування по вертикалі */
  
  img {
    max-width: 100%;
    max-height: 100%;
  }
    // width: 250px;
`;