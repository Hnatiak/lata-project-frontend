import React, { useEffect, useState } from 'react';
import { RightSideBar, ContainerDiv, News, ContainerTitle, ContainerA, ContainerP, Container, LeftSideBar, Title, ContainerNew, Img, TextContainer, Text, ContainerH5 } from './NewsContainer.styled';
import newsData from './newsContent';
import { Link } from 'react-router-dom';

const NewsContainer = () => {
    const [, setService] = useState([]);

    useEffect(() => {
        setService(newsData);
      }, []);

//   if (!newsContent) {
//     return <div>Error</div>;
//   }

  return (
    <>
      <Container>
        <LeftSideBar>
        {newsData.map((newsElement) => (
          <div key={newsElement.id} style={{ marginBottom: '60px' }}>
            <Title to={`/news/${newsElement.url}`} style={{ fontSize: '34px' }}>{newsElement.title}</Title>
            <img src={newsElement.img} alt="" style={{ marginBottom: '20px' }} />
            <p style={{ marginBottom: '20px' }}>{newsElement.description}</p>
          </div>
        ))}
        </LeftSideBar>
        <RightSideBar>
          <ContainerDiv>
            <News>Статті</News>
            <ContainerTitle>
              <ContainerA to="/articles/Korobkapidpitsu/">Коробка під піцу</ContainerA>
            </ContainerTitle>
            <ContainerP>Уявіть собі шматок ароматної італійської піци, приготованої щойно, буквально...</ContainerP>
            <ContainerTitle>
              <ContainerA to="/articles/Proetyketu/">Про етикетку</ContainerA>
            </ContainerTitle>
            <ContainerP>Під етикеткою мається на увазі товарний ярлик, який за с...</ContainerP>
            <ContainerTitle>
              <ContainerA to="/articles/Kartonnakorobka/">Картонна коробка та її виробництво</ContainerA>
            </ContainerTitle>
            <ContainerP>Картонна коробка - це досить універсальний пакувальний матеріал. Він...</ContainerP>
            <News>Послуги</News>
            <ContainerNew>
                <Img src='https://lata.net.ua/upload/iblock/7fb/7fb1eeda1b11653ea40bc63029bcb3ea.jpg' alt="flexprint" style={{margin: '0 15px 15px 0'}}/>
                <TextContainer>
                    <Text><b>Флексодрук</b> є одним з видів високого друку, в якому замість жорстких друкованих пластин...</Text>
                    <ContainerA to='/services/Nanessenya_zobragennya/'>Читати далі</ContainerA>
                </TextContainer>
            </ContainerNew>
            <ContainerH5>Підготовка до друку</ContainerH5>
            <ContainerNew>
                <Img src='https://lata.net.ua/upload/iblock/ebe/ebea54b65681af54d90553a87719dee5.jpg' alt="flexprint" />
                <TextContainer>
                    <Text>Крім простої верстки документів у форматі PDF, ПП "Лата" також здійснює...</Text>
                    <ContainerA to='/services/Pidgotovka_do_dryky/'>Читати далі</ContainerA>
                </TextContainer>
            </ContainerNew>
          </ContainerDiv>
        </RightSideBar>
      </Container>
    </>
  );
};

export default NewsContainer;