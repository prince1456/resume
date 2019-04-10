import withLayout from '../components/layout';
import Link from 'next/link'
const PostLink = props => (
    <li>
      <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
    </li>
  )
const Home = () => {
    return (
        <div>
            <ul>
            <PostLink id="eh " title="Helloo aya" />
            <PostLink id="wow" title="Helloo Ali" />
            <PostLink id="hom" title="Helloo Mobina" />
            <p>Hello im Home</p>
            </ul>
        </div>
    )
}

export default withLayout(Home)