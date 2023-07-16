import { HomePageContainer } from './HomePage.styled'
import Header from './Header/Header'
import Middle from './Middle/Middle'
import Collaction from './Collaction/Collaction'
import Container from './Container/Container'
import Experience from './Experience/Experience'
// import News from './News/News'
// import Footer from './Footer/Footer'

const HomePage = () => {
    return (
        <HomePageContainer>
            <Header />
            <Middle />
            <Collaction />
            <Container />
            <Experience />
            {/* <News /> */}
            {/* <Footer /> */}
        </HomePageContainer>
    )
}

export default HomePage;