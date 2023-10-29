import { Container, LeftSideBar, RightSideBar, ContainerH3, ContainerAButton, ContainerH5, ContainerDiv, News, ContainerA, ContainerTitle, ContainerP, Img, ContainerNew, TextContainer, Text  } from './NewsContainer.styled'

const NewsContainer = () => {
    return (
        <Container>
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
                </ContainerDiv>
            </RightSideBar>
            <LeftSideBar>
                <ContainerH3>Новини</ContainerH3>
                <ContainerH5>Нанесення зображення флексо та офсетним способом друку</ContainerH5>
                <ContainerNew>
                    <Img src='https://lata.net.ua/upload/iblock/7fb/7fb1eeda1b11653ea40bc63029bcb3ea.jpg' alt="flexprint" style={{margin: '0 15px 15px 0'}}/>
                    <TextContainer>
                        <Text><b>Флексодрук</b> є одним з видів високого друку, в якому замість жорстких друкованих пластин застосовуються еластичні флексоформи. Можливість флексографічної машини одночасно друкувати, лакувати, проводити висікання, істотно знижує...</Text>
                        <ContainerAButton to='services/Nanessenya_zobragennya/'>Читати далі</ContainerAButton>
                    </TextContainer>
                </ContainerNew>
                <ContainerH5>Підготовка до друку</ContainerH5>
                <ContainerNew>
                    <Img src='https://lata.net.ua/upload/iblock/ebe/ebea54b65681af54d90553a87719dee5.jpg' alt="flexprint" />
                    <TextContainer>
                        <Text>Для нас важливо, щоб наше пакування було вироблене за дотриманням всіх необхідних стандартів та вимог. Завдяки натуральній сировині наші вироби безпечні для здоров'я Ваших клієнтів.</Text>
                        <ContainerAButton to='services/Pidgotovka_do_dryky/'>Читати далі</ContainerAButton>
                    </TextContainer>
                </ContainerNew>
            </LeftSideBar>
        </Container>
      );
};

export default NewsContainer;