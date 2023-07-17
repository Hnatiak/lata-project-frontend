import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MiddleContainer = styled.div`
    height: 388px;
    width: 1230px;
    overflow: hidden;
    margin: 0 auto;
    padding: 0;
    background: #fff;
    position: relative;
`;

export const Image = styled.img`
    display: inline;
    width: 1230px;
    height: auto;
`;

export const LeftDiv = styled.div`
    position: absolute;
    display: block;
    border-bottom: #9AC43C 5px solid;
    left: 80px;
    bottom: 20px;
    background: #000;
    color: #fff;
    width: 30%;
    // z-index: 8;
    padding: 20px;
    opacity: 0.8;
    overflow: hidden;
    filter: alpha(opacity=8);
    box-sizing: border-box;
`;

export const Title = styled.h2`
   font-size: 26px;
    line-height: 1em;
    margin-bottom: 22px;
    color: #fff;
`;

export const P = styled.p`
   margin-bottom: 20px;
   line-height: 1.6em;
   color: #fff;
`;

export const A = styled.a`
    font-size: 12px;
    text-transform: uppercase;
    color: #fff;
    text-shadow: none;
    background-image: none;
    border-color: none;
    border-bottom-color: none;
    box-shadow: none;
    background: #9AC43C;
    padding: 4px 12px;
    border-radius: 2px;
    &:hover {
        background: #737373;
        color: #fff;
    }
`;

export const Arrow = styled(FontAwesomeIcon)`
    position: absolute; 
    top: 50%;
    translateY(-50%); 
    width: 30px; 
    height: 30px; 
    background-color: #000; 
    color: #fff; font-size: 24px; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    cursor: pointer; 
    color: #fff;
    ${({ direction }) => direction === 'left' && 'left: 10px;'} ${({ direction }) => direction === 'right' && 'right: 10px;'}
`;