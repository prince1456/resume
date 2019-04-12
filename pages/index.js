import withLayout from '../components/layout';
import Link from 'next/link'
import Intro from '../components/intro'
import DesignProcess from '../components/design-process'
import Header from '../components/header'
import '../styles/main.scss'

const Home = () => {
    return (
        <div>
          <Header />
          <Intro />
           <DesignProcess />
          <section className="works">
            <div>works</div>
          </section>
          <section className="subscribe">
            <div>subscribe</div>
          </section>
          <section className="article">
            <div>article post</div>
          </section>
          <section className="about-me">
            <div>about me</div>
          </section>
          <footer>
            <div>footer</div>
          </footer>
        </div>
    )
}

export default withLayout(Home)