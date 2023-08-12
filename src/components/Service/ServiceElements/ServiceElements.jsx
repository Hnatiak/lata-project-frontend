import React from 'react';
import { useParams } from 'react-router-dom';
import TitleSection from 'components/TitleSection/TitleSection';
import { RightSideBar, ContainerDiv, News, ContainerTitle, ContainerA, ContainerP, Container, LeftSideBar } from './ServiceElements.styled'

const ServiceElements = ({ services }) => {
  const { link } = useParams();
  const serviceSelector = services.find(serviceSelector => serviceSelector.url === `/${link}`);

  if (!serviceSelector) {
    return <div>Error</div>;
  }

//   const formattedDescription = article.description.replace(/\n/g, '<br />');
    const formattedDescription = serviceSelector.description
  .replace(/\t/g, '&emsp;') // Заміна табуляцій на &emsp;
  .replace(/\n/g, '<br />'); // Заміна нових рядків на <br />

  return (
    <>
        <TitleSection title={serviceSelector.title} />
        <Container>
            <LeftSideBar>
                <img src={serviceSelector.path} alt="" style={{ marginBottom: '20px' }}/>
                <p dangerouslySetInnerHTML={{ __html: formattedDescription }} />
            </LeftSideBar>
            <RightSideBar>
                <ContainerDiv>
                <News>Новини</News>
                    <ContainerTitle>
                        <ContainerA to="/articles/Korobkapidpitsu">Коробка під піцу</ContainerA>
                    </ContainerTitle>
                        <ContainerP>&emsp;Уявіть собі шматок ароматної італійської піци, приготованої щойно, буквально...</ContainerP>
                    <ContainerTitle>
                        <ContainerA to="/articles/Proetyketu">Про етикету</ContainerA>
                    </ContainerTitle>
                        <ContainerP>&emsp;Під етикеткою мається на увазі товарний ярлик, який за с...</ContainerP>
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
                </ContainerDiv>
            </RightSideBar>
        </Container>
    </>
  );
};

export default ServiceElements;