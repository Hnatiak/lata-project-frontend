import styled from '@emotion/styled';
import { Link } from 'react-router-dom'; // NavLink

export const HeaderWrapper = styled.header`
  justify-content: space-between;
  padding: 7px 40px 10px 40px;
  display: flex;
  gap: 30px;
  @media screen and (max-width: 780px) {
    padding: 7px 20px 10px 20px;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 780px) {
    max-width: 228px
  }
`;

export const LogoImage = styled.img`
  margin-bottom: 10px;
  max-width: 219px;
  max-height: 94px;
  @media screen and (max-width: 480px) {
    max-width: 100%;
  }
`;

export const LogoText = styled.b`
  font-size: 14px;
  color: #000;
`;

export const Nav = styled.nav`
    font: 14px/18px "PT Sans Caption", Arial, sans-serif;
    font-weight: 300;
    line-height: 1.6em;
    color: #656565;
    display: flex;
    flex-direction: column-reverse;
    @media screen and (max-width: 780px) {
      max-width: 476px;
    }
`;

export const Ul = styled.ul`
margin: 0 20px 25px 0;
  padding: 0;
  display: flex;
  gap: 14px;
  max-width: 870px;
  flex-wrap: wrap;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Question = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

export const MenuItem = styled.li`
  line-height: 1.6em;
  color: #111;
`;

export const A = styled.a`
  font: 14px/18px "PT Sans Caption", Arial, sans-serif;
  padding-bottom: 10px;
  // margin: 24px;
  margin: 28px 5px 0 0;
  padding-bottom: 10px;
  font-size: 14px;
  font-weight: 700;
  color: #9AC43C;
  border-bottom: 1px dotted #e6e6e6;
  @media screen and (max-width: 780px) {
    margin: 28px 0 10px 0;
  }
`;

export const MenuLinkActive = styled(Link)(({ selected }) => ({
  textTransform: 'uppercase',
  fontSize: '13px',
  fontWeight: selected ? '700' : '400',
  color: selected ? '#9AC43C' : '#111',
  textDecoration: 'none',
  '&:hover': {
    color: '#9AC43C',
  },
}));

export const AboutUl = styled.ul`
  position: absolute;
  z-index: 3;
  display: block;
  color: white;
  min-width: 180px;
  padding: 0;
  margin-top: 2px;
  background: #222;
  border: none;
  opacity: inherit;
`;

export const AboutA = styled(Link)`
  text-transform: uppercase;
  padding: 10px 15px 10px 15px;
  display: block;
  &:hover {
    cursor: pointer;
    background: #9AC43C;
  }
`;
