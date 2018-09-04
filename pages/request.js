import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'
import Markdown from 'react-markdown'

const Request = (props) => (
  <Layout>
    <div className="markdown">
      <Markdown source={`
# Viewing Request

[Back to Requests](http://localhost:3000/bins/${props.bin.id}/requests)

### Request: ${props.request.id}
### Bin ID: ${props.bin.id}
### Bin Name: ${props.bin.attributes.name}

Request Info:

 - Method: ${props.request.attributes.method}
 - Content Length: ${props.request.attributes.content_length}
 - Protocol: ${props.request.attributes.protocol}
 - Remote Address: ${props.request.attributes.remote_addr}
 - User Agent: ${props.request.attributes.user_agent}
 - Body: \`${JSON.stringify(props.request.attributes.body, null, 2) }\`

Created Time:

 - ${props.bin.meta.created.unix.epoch}
 - ${props.bin.meta.created.unix.nano}
 - ${props.bin.meta.created.utc}

API Links:

 - Source: ${props.request.links.self}
 - Bin: ${props.request.links.bin}
 - All Requests: ${props.request.links.requests}
 - Make a Request to: ${props.request.links.request}
            `} />
    </div>
    <style jsx global>{`
     .markdown {
       font-family: 'Arial';
     }

     .markdown a {
       text-decoration: none;
       color: blue;
     }

     .markdown a:hover {
       opacity: 0.6;
     }

     .markdown h3 {
       margin: 0;
       padding: 0;
       text-transform: uppercase;
     }
  `}</style>
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
