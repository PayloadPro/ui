import Layout from '../components/Layout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const RequestLink = ({ bin, request }) => {
  return <li key={request.id}>
    <Link href={`/bins/${bin.id}/requests/${request.id}`}>
      <a>{request.attributes.method} ( {request.meta.created.utc} )</a>
    </Link>
  </li>
}

const Requests = (props) => (
  <Layout>
    <h1>Requests to "{props.bin.attributes.name}"</h1>
    <ul>
      {props.requests.map((request) => (
        <RequestLink key={request.attributes.id} bin={props.bin} request={request} />
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

Requests.getInitialProps = async function (context) {

  const { id } = context.query

  const binRes = await fetch(`http://localhost:8081/bins/${id}`)
  const { data: bin } = await binRes.json()

  const reqRes = await fetch(`http://localhost:8081/bins/${id}/requests`)
  const { data: requests } = await reqRes.json()

  return { requests, bin }
}

export default Requests