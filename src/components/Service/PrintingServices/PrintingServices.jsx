import { useState } from 'react';
import { Container, LeftSideBar, RightSideBar, ContainerDivService, ContainerImgService, ContainerDiv, News, ContainerA, ContainerTitle, ContainerP  } from './PrintingServices.styled'
import Services from './Services.json';

const PrintingServices = () => {
    const formatDescription = (description) => {
        return description.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
    };

      // Додамо стан, щоб відстежувати поточну сторінку
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9; // Кількість елементів на сторінці
    const totalPages = Math.ceil(Services.length / itemsPerPage);

    // Функції для переходу між сторінками
    const goToNextPage = () => {
      setCurrentPage((prevPage) => prevPage + 1);
    };

    const goToPrevPage = () => {
      setCurrentPage((prevPage) => prevPage - 1);
    };

    // Обраховуємо індекс початку та кінця елементів для поточної сторінки
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return (
        <Container>
            <LeftSideBar>
                {Services.slice(startIndex, endIndex).map((service, index) => (
                  <ContainerDivService key={index}>
                    <ContainerImgService src={service.path} alt={`Photo ${service.title}`} />
                    <div>
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'baseline' }}>
                        <div><ContainerA to={service.link}><b>{service.title}</b></ContainerA></div>
                      </div>
                      <ContainerP dangerouslySetInnerHTML={{ __html: formatDescription(service.description) }} />
                    </div>
                  </ContainerDivService>
                ))}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                  {currentPage > 1 && (<div><ContainerA onClick={goToPrevPage}>{'<'}</ContainerA></div>)}
                  <span style={{ margin: '0 10px' }}>Сторінка {currentPage}/{totalPages}</span>
                  {currentPage < totalPages && (<div><ContainerA onClick={goToNextPage}>{'>'}</ContainerA></div>)}
                </div>
            </LeftSideBar>
            <RightSideBar>
                <ContainerDiv>
                <News>Новини</News>
                    <ContainerTitle>
                        <ContainerA to="/news/Stakan4yky/">Спішимо порадувати усіх наших клієнтів.</ContainerA>
                    </ContainerTitle>
                        <ContainerP>Дорогі клієнти! Приватне підприємство "Лата" почало випуск нового виду...</ContainerP>
                    <ContainerTitle>
                        <ContainerA to="/news/Novivesil/">Нові види подарункових "весільних" коробок з картону хром-ерзац.</ContainerA>
                    </ContainerTitle>
                        <ContainerP>ПП "Лата" розробило новий дизайн подарункових, так званих "весіль...</ContainerP>
                </ContainerDiv>
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
        </Container>
      );
};

export default PrintingServices;