import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    background: #111;
    flex-direction: column;
    color: #bbb;
`;

export const FirstBlock = styled.div`
    width: 270px;
`;

export const RightSideBar = styled.div`
    width: 270px;
    margin-right: 25px;
`;

export const ContainerH3 = styled.h3`
    margin-bottom: 20px;
    font-size: 34px;
    line-height: 1.5em;
    margin-top: 0;
`;

export const ContainerH5 = styled.h5`
    margin-bottom: 20px;
    font-size: 24px;
    line-height: 1.5em;
    font-weight: 300;
    margin-top: 0;
`;

export const ContainerDiv = styled.div`
    border-right: 1px solid #e9e9e9;
    padding: 0 30px 0 0;
`;

export const News = styled.h5`
    border-bottom: #e9e9e9 1px solid;
    padding-bottom: 9px;
    margin-bottom: 20px;
    font-size: 24px;
`;

export const ContainerTitle = styled.div`
    margin-bottom: 10px;
`;

export const ContainerA = styled.a`
  color: #9AC43C;
  margin-bottom: 10px;
  &:hover {
    border-bottom: 1px solid #9AC43C;
    }
`;

export const ContainerAButton = styled(NavLink)`
font-size: 16px;
text-transform: uppercase;
padding: 8px 22px;
box-shadow: 1px;
background-color: #9AC43C;
border-radius: 10px;
color: #000;
transition: background-color 0.3s;
position: relative;

&:hover {
//   border-bottom: 1px solid #9AC43C;
  background: #656565;
  color: #fff;
}
`;

export const ContainerP = styled.p`
    font-family: Arial, sans-serif;
`;