import Header from './Header/Header'
import Middle from './Middle/Middle'
import Collaction from './Collaction/Collaction'
import Container from './Container/Container'
import Experience from './Experience/Experience'
import NewsContainer from './News/NewsContainer'

const HomePage = () => {
    return (
        <div>
            <Header />
            <Middle />
            <Collaction />
            <Container />
            <Experience />
            <NewsContainer />
        </div>
    )
}

export default HomePage;