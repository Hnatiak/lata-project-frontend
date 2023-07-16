import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { keyframes } from 'styled-components';

// export const fadeInUp = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

export const GeneralContainer = styled.div`
    width: 1230px;
    margin: 0 auto;
    padding: 0;
    background: #fff;
    padding: 20px 0 0 0;
`;

export const MiddleContainer = styled.div`
    display: flex;
    margin: 0 15px 0 15px;
    gap: 75px;
`;

export const ContainerDiv = styled.a`
    text-align: center;
    margin-bottom: 10px;
`;

export const ContainerP = styled.p`
    margin: 0 0 10px
`;

export const ContainerA = styled.a`
    color: #9AC43C;
    &:hover {
        border-bottom: 1px solid #9AC43C;
    }
`;

export const ContainerSpan = styled.span`
    font-family: Arial, sans-serif;
    font-size: 16px;
    background-color: rgb(255, 255, 255);
    font-weight: 300;
`;

export const AnimatedContainer = styled.div`
    transition: opacity 300ms ease-in;
`;

export const Svg = styled(FontAwesomeIcon)`
    cursor: pointer;
    width: 25px; 
    height: 25px; 
    padding: 20px; 
    fontSize: 30px; 
    line-height: 40px; 
    background: #9AC43C; 
    color: white; 
    border-radius: 50%;
    &:hover {
        background: #656565;
    }
`;

