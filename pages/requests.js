import Layout from '../components/Layout'
import RequestListTable from '../components/RequestListTable'
import fetch from 'isomorphic-unfetch'


const Requests = (props) => (
  <Layout>
    <h1>Requests to "{props.bin.attributes.name}"</h1>
    <RequestListTable requests={props.requests} bin={props.bin} />
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