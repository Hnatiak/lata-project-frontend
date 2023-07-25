// import Header from './Header/Header'
import Middle from '../components/Home/Middle/Middle'
import Collaction from '../components/Home/Collaction/Collaction'
import Container from '../components/Home/Container/Container'
import Experience from '../components/Home/Experience/Experience'
import NewsContainer from '../components/Home/News/NewsContainer'

const HomePage = () => {
    return (
        <main>
            <Middle />
            <Collaction />
            <Container />
            <Experience />
            <NewsContainer />
        </main>
    )
}

export default HomePage;