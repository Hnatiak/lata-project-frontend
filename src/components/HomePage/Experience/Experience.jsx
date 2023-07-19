import { Container, LeftSideBar, RightSideBar, ContainerH3, ContainerH5, ContainerDiv, News, ContainerA, ContainerTitle, ContainerP  } from './Experience.styled'

const Experience = () => {
    return (
        <Container>
            <LeftSideBar>
                <ContainerH3>Досвід у поєднанні з сучасними технологіями</ContainerH3>
                <ContainerH5>За роки нашої роботи ми навчились робити продукцію якісно</ContainerH5>
                <p>Ми завжди працюємо над покращенням якості та вдосконаленням технології на виробництві, щоб наші клієнти утримували поліграфічну продукцію найвищого ґатунку.</p>
                <ContainerH5>Екологічно чисто та безпечно для здоров'я</ContainerH5>
                <p>Для нас важливо, щоб наше пакування було вироблене за дотриманням всіх необхідних стандартів та вимог. Завдяки натуральній сировині наші вироби безпечні для здоров'я Ваших клієнтів.</p>
            </LeftSideBar>
            <RightSideBar>
                <ContainerDiv>
                <News>Новини</News>
                    <ContainerTitle>
                        <ContainerA href="/news/Novivesil/">Спішимо порадувати усіх наших клієнтів.</ContainerA>
                    </ContainerTitle>
                        <ContainerP>Дорогі клієнти! Приватне підприємство "Лата" почало випуск нового виду...</ContainerP>
                    <ContainerTitle>
                        <ContainerA href="/news/Novivesil/">Нові види подарункових "весільних" коробок з картону хром-ерзац.</ContainerA>
                    </ContainerTitle>
                        <ContainerP>ПП "Лата" розробило новий дизайн подарункових, так званих "весіль...</ContainerP>
                </ContainerDiv>
            </RightSideBar>
        </Container>
      );
};

export default Experience;

