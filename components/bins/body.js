import { Segment, Dropdown, Icon, Input, Menu, Tab } from 'semantic-ui-react'

import Inspector from './body_panes/inspector'
import Requester from './body_panes/requester'
import Stats from './body_panes/stats'

const EmptyBinBody = () => {
    return (
        <Segment
            basic
            padded='very'
            textAlign='center'>
            <em>No requests have been made to this bin yet.</em>
        </Segment>
    )
}

const BinInspector = (props) => {
    return (
        <div>

            {/* <Menu vertical>

                <Menu.Item header={true}>
                    Bin
          <Menu.Menu>
                        <Menu.Item
                            name='inspector'
                            active={true}
                        >
                            Request Inspector
            </Menu.Item>
                        <Menu.Item
                            link={true}
                            name='stats'
                        >
                            Stats
            </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>

                <Dropdown item text='Mock a Request'>
                    <Dropdown.Menu>
                        <Dropdown.Item text='GET' />
                        <Dropdown.Item text='POST' />
                        <Dropdown.Item text='PUT' />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu> */}
            <Tab
                bin={props.bin}
                request={props.request}
                requests={props.requests}

                menu={{ secondary: true, pointing: true, fluid: true }}
                panes={[
                    {
                        menuItem: 'Request Inspector', render: (props) => (
                            <Inspector bin={props.bin} request={props.request} requests={props.requests}></Inspector>
                        )
                    },
                    {
                        menuItem: 'Bin Stats', render: (props) => (
                            <Stats bin={props.bin}></Stats>
                        )
                    },
                ]}
            />
        </div>
    )
}

export {
    BinInspector,
    EmptyBinBody,
}
