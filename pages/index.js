import withLayout from '../components/layout';
import Link from 'next/link'
import Intro from '../components/intro'
import '../styles/main.scss'

const Home = () => {
    return (
        <div>
         <Intro/>
          <section className="design-process">
            <div>design process</div>
          </section>
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