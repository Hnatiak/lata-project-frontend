import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    @media screen and (max-width: 480px) {
        flex-direction: column;
        gap: 35px;
    }
`;