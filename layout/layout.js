import 'semantic-ui-css/semantic.min.css'
import Crumbs from './crumbs'
import Header from './header'
import { Grid } from 'semantic-ui-react'

const Layout = (props) => (
  <div>
    <Header />
    <Grid container columns={1}>
      {/* <Crumbs /> */}
      <Grid.Column>
        {props.children}
      </Grid.Column>
    </Grid>
  </div>
)

export default Layout
