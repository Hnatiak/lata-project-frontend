import styled from '@emotion/styled';

export const Section = styled.section`
    background: #252525;
    position: relative;
    margin: 0;
    padding: 0;
    color: #fefefe;
    display: block;
`;

export const Container = styled.div`
    padding: 0 20px 20px 25px;;
    position: relative;
    max-width: 1170px;
    display: flex;
    align-items: center;
    @media screen and (max-width: 480px) {
        padding: 0 10px 20px 10px;
    }
`;

export const Title = styled.h2`
    color: #fff;
    margin: 32px 0 32px 0;
    font-size: 42px;
    @media screen and (max-width: 480px) {
        font-size: 28px;
    }
`;

