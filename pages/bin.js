
import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'

const Bin = (props) => (
    <Layout>
        <h1>{props.bin.name}</h1>
        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        <img src={props.show.image.medium} />
    </Layout>
)

Bin.getInitialProps = async function (context) {
    const { id } = context.query
    const res = await fetch(`http://localhost:8081/bins/${id}`)
    const { data } = await res.json()

    console.log(data)
    console.log(`Fetched bin: ${data}`)

    return { bin: bin }
}

export default Bin