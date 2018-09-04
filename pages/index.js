import Layout from '../components/layout'
import Box from 'ui-box'
import Manager from '../components/manager'

import { SegmentedControl, Pre, SideSheet, Paragraph, Pane, Text, Heading, Card, Button } from 'evergreen-ui'

export default () => (
  <Layout>

    <Manager isShown={false}>
      {({ state, setState }) => (
        <Box>
          <SideSheet
            isShown={state.isShown}
            onCloseComplete={() => setState({ isShown: false })}
            containerProps={{
              display: 'flex',
              flex: '1',
              flexDirection: 'column',
            }}
          >
            <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
              <Pane padding={16}>
                <Heading size={600}>Making a Request</Heading>

                <Paragraph size={400} color="extraMuted">
                  Congratulations, your bin is ready to receive requests!
            </Paragraph>

              </Pane>
            </Pane>
            <Pane flex="1" overflowY="scroll" background="tint1" padding={16}>

              <Heading>cURL</Heading>

              <Card
                elevation={1}
                float="left"
                backgroundColor="white"
                padding={12}
                alignItems="left"
                flexDirection="column"
              >
                <Pre size={300} fontFamily={'mono'}>The quick brown fox jumps over the lazy dog</Pre>
              </Card>

            </Pane>
          </SideSheet>
          <Button onClick={() => setState({ isShown: true })}>
            Making a Request
      </Button>
        </Box>
      )}
    </Manager>

  </Layout>
)