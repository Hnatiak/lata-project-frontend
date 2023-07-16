import { Container, ContainerFirst, ContainerSecond, ContainerH3, ContainerH5 } from './Experience.styled'

const Experience = () => {

    return (
        <Container>
            <ContainerFirst>
                <ContainerH3>Досвід у поєднанні з сучасними технологіями</ContainerH3>
                <ContainerH5>За роки нашої роботи ми навчились робити продукцію якісно</ContainerH5>
                <p>Ми завжди працює над покращенням якості та вдосконаленням технології на виробництві, щоб наші клієнти утримували поліграфічну продукцію найвищого гатунку.</p>
                <ContainerH5>Екологічно чисто та безпечно для здоров'я</ContainerH5>
                <p>Для нас важливо, щоб наше пакування було вироблене за дотриманням всіх необхідних стандартів та вимог. Завдяки натуральній сировині наші вироби безпечні для здоров'я Ваших клієнтів.</p>
            </ContainerFirst>
            <ContainerSecond>
                <div style={{ borderLeft: '1px solid #e9e9e9', padding: '0 0 0 30px'}}>
                <h5 style={{ borderBottom:' #e9e9e9 1px solid', paddingBottom: '9px', marginBottom: '20px', fontSize: '24px' }}>Новини</h5>
                    <ul>
                        <li>
                            <a href=""><p>Спішимо порадувати усіх наших клієнтів.</p></a>
                            <p>Дорогі клієнти! Приватне підприємство "Лата" почало випуск нового виду...</p>
                        </li>
                        <li>
                            <a href=""><p>Нові види подарункових "весільних" коробок з картону хром-ерзац.</p></a>
                            <p>ПП "Лата" розробило новий дизайн подарункових, так званих "весіль...</p>
                        </li>
                    </ul>
                </div>
            </ContainerSecond>
        </Container>
      );
};

export default Experience;

