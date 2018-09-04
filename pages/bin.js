import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'
import Markdown from 'react-markdown'

const Bin = (props) => (
    <Layout>
        <div className="markdown">
            <Markdown source={`
# ${props.bin.attributes.name}
## ${props.bin.id}

Created Times:

 - ${props.bin.meta.created.unix.epoch}
 - ${props.bin.meta.created.unix.nano}
 - ${props.bin.meta.created.utc}

API Links:

 - Source: ${props.bin.links.self}
 - All Requests: ${props.bin.links.requests}
 - Make a Request to: ${props.bin.links.request}
            `}/>
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

Bin.getInitialProps = async function (context) {
    const { id } = context.query
    const res = await fetch(`http://localhost:8081/bins/${id}`)
    const { data: bin } = await res.json()

    return { bin }
}

export default Bin
