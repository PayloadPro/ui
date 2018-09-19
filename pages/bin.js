import Layout from '../layout/layout.js'
import fetch from 'isomorphic-unfetch'
import React from 'react'
import Router from 'next/router'

import { BinHeader } from '../components/bins/header'
import { BinInspector, EmptyBinBody } from '../components/bins/body'

const Request = (props) => (
  <Layout>
    <BinHeader request={props.request} bin={props.bin} />
    {props.requests === undefined || props.requests.length === 0 ?
      (<EmptyBinBody></EmptyBinBody>) :
      (<BinInspector bin={props.bin} request={props.request} requests={props.requests}></BinInspector>)
    }
  </Layout>
)

Request.getInitialProps = async function (context) {

  let output = {}

  const { id, rid } = context.query

  const binRes = await fetch(`http://localhost:8081/bins/${id}`)
  const { data: bin } = await binRes.json()
  output.bin = bin

  if (bin.meta.stats.requests.total > 0) {

    // get all the requests for this bin
    const allReqs = await fetch(`http://localhost:8081/bins/${id}/requests`)
    const { data: requests } = await allReqs.json()
    output.requests = requests

    if (rid !== undefined) {

      // get a specific request if needed
      const res = await fetch(`http://localhost:8081/bins/${id}/requests/${rid}`)
      const { data: request } = await res.json()
      output.request = request
    } else {

      let path = `/bins/${bin.id}/requests/${requests[0].id}`

      if (context && context.req) {
        context.res.writeHead(307, { Location: path })
        context.res.end()
      } else {
        Router.push(path)
      }
    }
  }

  return output
}

export default Request
