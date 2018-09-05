import Layout from '../components/Layout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const BinLink = ({ bin }) => {
  return <li key={bin.id}>
    <Link href={`/bins/${bin.id}`}>
      <a>{bin.attributes.name}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
}

const Index = (props) => (
  <Layout>
    <h1>Bins</h1>
    <ul>
      {props.bins.map(( bin ) => (
        <BinLink key={bin.id} bin={bin} />
      ))}
    </ul>
    <style jsx>{`
      h1, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
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