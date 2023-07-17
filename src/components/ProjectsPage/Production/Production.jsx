import React from 'react';
import { Section, Container, Row, Title } from './Production.styled'
// import { Link } from 'react-router-dom';

const Production = () => {
  return (
    <Section>
        <Container>
            <Row>
                <div>
                    <Title>Продукція</Title>
                </div>
                {/* <div></div> */}
            </Row>
        </Container>
    </Section>
  );
};

export default Production;