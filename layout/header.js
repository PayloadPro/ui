import { Grid, Segment, Menu } from 'semantic-ui-react'
import CreateBinModal from '../components/bins/create-bin-modal'

const Header = () => (
    <Segment inverted>
        <Grid container columns={1}>
            <Grid.Column>
                <Menu inverted pointing>
                    <Menu.Item name='Payload Pro' />
                    <Menu.Menu position='right'>
                        <CreateBinModal />
                    </Menu.Menu>
                    <Menu.Menu >
                        <Menu.Item name='RTFM' />
                    </Menu.Menu>
                </Menu>
            </Grid.Column>
        </Grid>
    </Segment>
)

export default Header