import Layout from '../components/Layout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const BinLink = ({ bin }) => {
  return <li key={bin.id}>
    <Link href={`/bins/${bin.id}`}>
      <a>{bin.attributes.name}</a>
    </Link>
  </li>
}

const Index = (props) => (
  <Layout>
    <h1>Recently created bins:</h1>
    <ul>
      {props.bins.map(( bin ) => (
        <BinLink key={bin.id} bin={bin} />
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function () {
  const res = await fetch('http://localhost:8081/bins')
  const { data: data } = await res.json()

  let output = {
    bins: data
  }

  return output
}

export default Index