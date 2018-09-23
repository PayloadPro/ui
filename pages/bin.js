import Layout from '../layout/layout.js'
import fetch from 'isomorphic-unfetch'
import React from 'react'
import Router from 'next/router'

import { BinHeader } from '../components/bins/header'
import { BinInspector, EmptyBinBody } from '../components/bins/body'

import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

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

  const binRes = await fetch(`${API_URL}/bins/${id}`)
  const { data: bin } = await binRes.json()
  output.bin = bin

  if (bin.meta.stats.requests.total > 0) {

    // get all the requests for this bin
    const allReqs = await fetch(`${API_URL}/bins/${id}/requests`)
    const { data: requests } = await allReqs.json()
    output.requests = requests

    if (rid !== undefined) {

      // get a specific request if needed
      const res = await fetch(`${API_URL}/bins/${id}/requests/${rid}`)
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
