import { Container, Header, List, Divider, Image, Grid, Segment, Menu } from 'semantic-ui-react'
import CreateBinModal from '../components/bins/create-bin-modal'

const Footer = () => (
    <Segment inverted style={{ margin: '5em 0em 0em', padding: '5em 0em' }} vertical>
        <Container textAlign='center'>
            <Grid columns={2} stackable inverted>
                <Grid.Row>
                    <Grid.Column floated='left' width={4}>
                        <Header inverted as='h4' content='Group 1' />
                        <List link inverted>
                            <List.Item as='a'>Link One</List.Item>
                            <List.Item as='a'>Link Two</List.Item>
                            <List.Item as='a'>Link Three</List.Item>
                            <List.Item as='a'>Link Four</List.Item>
                        </List>
                    </Grid.Column>

                    <Grid.Column floated='right' width={10}>
                        <Header inverted as='h4' content='Footer Header' />
                        <p>
                            Extra space for a call to action inside the footer that could help re-engage
                            users.
                  </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Divider inverted section />
            <List horizontal inverted divided link>
                <List.Item as='a' href='#'>
                    Contact Us
              </List.Item>
                <List.Item as='a' href='#'>
                    Terms and Conditions
              </List.Item>
            </List>
        </Container>
    </Segment>
)

export default Footer
