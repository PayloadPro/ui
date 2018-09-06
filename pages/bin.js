import Layout from '../layout/layout.js'
import { NiceDate, RelativeDate } from '../utils/dates'
import RequestListTable from '../components/requests/list-table'
import fetch from 'isomorphic-unfetch'
import { Header, Icon } from 'semantic-ui-react'

const BinHeader = (props) => (
  <Header as='h2'>
    <Icon name='zip' />
    <Header.Content>
      {props.bin.attributes.name}
      <Header.Subheader>
        <RelativeDate date={props.bin.meta.created.utc} /><br /><small>(<NiceDate date={props.bin.meta.created.utc} />)</small>
      </Header.Subheader>
    </Header.Content>
  </Header>
)

const Bin = (props) => (
  <Layout>
    <BinHeader request={props.request} bin={props.bin} />
    <RequestListTable requests={props.requests} bin={props.bin} />
  </Layout>
)

Bin.getInitialProps = async function (context) {
  const { id } = context.query

  const binRes = await fetch(`http://localhost:8081/bins/${id}`)
  const { data: bin } = await binRes.json()

  const reqRes = await fetch(`http://localhost:8081/bins/${id}/requests`)
  const { data: requests } = await reqRes.json()

  return { requests, bin }
}

export default Bin
