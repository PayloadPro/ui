import Layout from '../components/Layout.js'
import NiceDate from '../components/NiceDate'
import RelativeDate from '../components/RelativeDate'
import RequestInfoTable from '../components/RequestInfoTable'
import fetch from 'isomorphic-unfetch'
import React from 'react'
import { Header } from 'semantic-ui-react'
import BinLink from '../components/BinLink'
import RequestIconColored from '../components/RequestIconColored'

const RequestHeader = (props) => (
  <Header as='h2'>
    <RequestIconColored request={props.request} />
    <Header.Content>
      Viewing Request in <BinLink bin={props.bin} />
      <Header.Subheader>
        <RelativeDate date={props.request.meta.created.utc} /><br /><small>(<NiceDate date={props.request.meta.created.utc} />)</small>
      </Header.Subheader>
    </Header.Content>
  </Header>
)

const Request = (props) => (
  <Layout>
    <RequestHeader request={props.request} bin={props.bin} />
    <RequestInfoTable request={props.request} bin={props.bin} />
  </Layout>
)

Request.getInitialProps = async function (context) {

  const { id, rid } = context.query

  const binRes = await fetch(`http://localhost:8081/bins/${id}`)
  const { data: bin } = await binRes.json()

  const res = await fetch(`http://localhost:8081/bins/${id}/requests/${rid}`)
  const { data: request } = await res.json()

  return { bin, request }
}

export default Request
