import Header from './Header/Header'
import Middle from './Middle/Middle'
import Collaction from './Collaction/Collaction'
import Container from './Container/Container'
import Experience from './Experience/Experience'
import NewsContainer from './News/NewsContainer'
import Footer from './Footer/Footer'

const HomePage = () => {
    return (
        <div>
            <Header />
            <Middle />
            <Collaction />
            <Container />
            <Experience />
            <NewsContainer />
            <Footer />
        </div>
    )
}

export default HomePage;