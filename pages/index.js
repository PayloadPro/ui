import Layout from '../layout/layout.js'
import BinList from '../components/bins/list'
import fetch from 'isomorphic-unfetch'
import HomepageCards from '../components/homepage/cards'
import { Grid, Icon, Image, Divider } from 'semantic-ui-react'

const Index = (props) => (
  <Layout>
    <Image src='http://react.semantic-ui.com/images/wireframe/image.png' fluid />
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column width={12}>
          <Divider horizontal><Icon name='react' /> Features</Divider>
          <HomepageCards />
        </Grid.Column>
        <Grid.Column width={4}>
          <Divider horizontal><Icon name='rebel' /> Recent Bins</Divider>
          <BinList bins={props.bins} />
          <p>Want to make your bins private? Get in touch...</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
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
