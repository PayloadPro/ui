import React from 'react'
import RelativeDate from '../components/RelativeDate'
import RequestLink from '../components/RequestLink'
import { Button, Image, List, Table } from 'semantic-ui-react'

const colorForRequestMethod = {
    GET: 'purple',
    POST: 'green',
    PUT: 'orange',
    PATCH: 'yellow',
    DELETE: 'red',
    OPTIONS: 'teal',
    HEAD: 'blue'
}

const RequestRow = ({ request, bin }) => {
    const color = colorForRequestMethod[request.attributes.method]
    return (
        <List.Item>
            <List.Icon color={color} name='file' />
            <List.Content>
                <List.Header>
                    <RequestLink bin={bin} request={request} />
                </List.Header>
                <List.Description>
                    <RelativeDate date={request.meta.created.utc} />
        </List.Description>
            </List.Content>
        </List.Item>
    )
}


const RequestListTable = (props) => {
    return (
        <List divided relaxed>
            {props.requests.map((request) => (
                <RequestRow request={request} bin={props.bin} />
            ))}
        </List>
    )
}

export default RequestListTable
