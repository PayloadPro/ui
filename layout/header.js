import { Grid, Segment, Menu } from 'semantic-ui-react'

const Header = () => (
    <Segment inverted>
        <Grid container columns={1}>
            <Grid.Column>
                <Menu inverted pointing>
                    <Menu.Item name='Payload Pro' />
                    <Menu.Menu position='right'>
                        <Menu.Item name='RTFM' />
                    </Menu.Menu>
                </Menu>
            </Grid.Column>
        </Grid>
    </Segment>
)

export default Header