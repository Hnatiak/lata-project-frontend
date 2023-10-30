import React, { useEffect, useState } from 'react';
import articlesData from './articlesConteiner';
import { RightSideBar, ContainerDiv, News, ContainerTitle, ContainerA, ContainerP, Container, Title, LeftSideBar, ContainerNew, Img, TextContainer, Text, ContainerH5 } from './ArticlesContainer.styled'

const ArticlesContainer = () => {
    const [, setArticle] = useState([]);

    useEffect(() => {
        setArticle(articlesData);
    }, []);

  return (
    <>
        <Container>
            <LeftSideBar>
                {articlesData.map((articlesElement) => (
                    <div key={articlesElement.id} style={{ marginBottom: '60px' }}>
                        <Title to={`/articles/${articlesElement.url}`} style={{ fontSize: '34px' }}>{articlesElement.title}</Title>
                        <div>
                            <img src={articlesElement.img} alt="" style={{ marginBottom: '20px' }} />
                            <p style={{ marginBottom: '20px' }}>{articlesElement.description}</p>
                        </div>
                    </div>
                ))}
            </LeftSideBar>
            <RightSideBar>
                <ContainerDiv>
                    <News>Новини</News>
                    <ContainerTitle>
                        <ContainerA to="/news/Stakan4yky">Спішимо порадувати усіх наших клієнтів.</ContainerA>
                    </ContainerTitle>
                        <ContainerP>Шановні клієнти! Приватне підприємство "Лата" почало випуск нового виду...</ContainerP>
                    <ContainerTitle>
                        <ContainerA to="/news/Novivesil">Нові види подарункових "весільних" коробок з картону хром-ерзац.</ContainerA>
                    </ContainerTitle>
                        <ContainerP>ПП "Лата" розробило новий дизайн подарункових, "весільних", і не тільки...</ContainerP>
                </ContainerDiv>
                <ContainerDiv>
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

export default ArticlesContainer;