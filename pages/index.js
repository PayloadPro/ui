import Layout from '../layout/layout.js'
import BinList from '../components/bins/list'
import fetch from 'isomorphic-unfetch'
import HomepageCards from '../components/homepage/cards'
import { Divider } from 'semantic-ui-react'


const Index = (props) => (
  <Layout>
    <h1>Recently created bins:</h1>
    <BinList bins={props.bins} />
    <Divider horizontal>Features</Divider>
    <HomepageCards />
  </Layout>
)

Index.getInitialProps = async function () {
  const res = await fetch('http://localhost:8081/bins')
  const { data: data } = await res.json()

  let output = {
    bins: data
  }

  return output
}

export default Index
