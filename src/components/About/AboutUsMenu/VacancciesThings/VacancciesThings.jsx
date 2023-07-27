import React from 'react';
import { Container, RightSideBar, ContainerDiv, News, ContainerTitle, ContainerAActive, ContainerA, MenuContainer } from './VacancciesThings.styled'

const VacancciesThings = () => {
    return (
    <Container>
        <MenuContainer>
            <h1 style={{ lineHeight: '1.6' }}>Надіслати резюме lata.net.ua@gmail.com</h1>
        </MenuContainer>
        <RightSideBar>
            <ContainerDiv>
            <News>Про нас</News>
                <ContainerTitle>
                    <ContainerA to="/company/questions">Часті питання</ContainerA>
                </ContainerTitle>
                <ContainerTitle>
                    <ContainerAActive to="/company/vacancies">Вакансії</ContainerAActive>
                </ContainerTitle>
            </ContainerDiv>
        </RightSideBar>
    </Container>
    );
  };
  
  export default VacancciesThings;