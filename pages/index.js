import Layout from '../components/Layout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>
    <h1>Bins</h1>
    <ul>
      {props.bins.map(( bin, i ) => (
        <li key={bin.id}>
          <Link as={`/bins/${bin.id}`} href={`/post?id=${bin.id}`}>
            <a>{bin.attributes.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function () {
  const res = await fetch('http://localhost:8081/bins')
  const { data: data } = await res.json()

  console.log(`Bins fetched. Count: ${data.length}`)
  let output = {
    bins: data
  }
  console.log(output)
  return output
}

export default Index