import React from 'react'
import RequestLink from './link'
import RequestLinkLabel from './link-label'
import { Menu } from 'semantic-ui-react'

const RequestRow = ({ request, bin }) => {
    return (
        <Menu.Item>
            <RequestLink bin={bin} request={request} />
            <RequestLinkLabel bin={bin} request={request} />
        </Menu.Item>
    )
}

const RequestListTable = (props) => {
    return (
        <Menu fluid vertical>
            <Menu.Item key='header' header>Requests to this bin</Menu.Item>
            {props.requests.map((request) => (
                <RequestRow key={request.id} request={request} bin={props.bin} />
            ))}
        </Menu>
    )
}

RequestListTable.getInitialProps = async function (context) {
    console.log(context)
}

export default RequestListTable
