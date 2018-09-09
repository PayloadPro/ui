import { Segment, Tab } from 'semantic-ui-react'

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
        <Tab
            bin={props.bin}
            request={props.request}
            requests={props.requests}

            menu={{ secondary: true, pointing: true }}
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
                {
                    menuItem: 'Make Requests', render: (props) => (
                        <Requester></Requester>
                    )
                }
            ]}
        />
    )
}

export {
    BinInspector,
    EmptyBinBody,
}
