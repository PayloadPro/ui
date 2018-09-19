import React from 'react'
import { NiceDate } from '../../utils/dates'
import { Table } from 'semantic-ui-react'

const colorForRequestMethod = {
    GET: 'purple',
    POST: 'green',
    PUT: 'orange',
    PATCH: 'yellow',
    DELETE: 'red',
    OPTIONS: 'teal',
    HEAD: 'blue'
}

const RequestInfoTable = (props) => {

    const color = colorForRequestMethod[props.request.attributes.method]

    return (
        <Table definition color={color} key={color}>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>Request Method</Table.Cell>
                    <Table.Cell><code>{props.request.attributes.method}</code></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Body</Table.Cell>
                    <Table.Cell><pre>{JSON.stringify(props.request.attributes.body, null, 2)}</pre></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Content Type</Table.Cell>
                    <Table.Cell><pre>{props.request.attributes.content_type}</pre></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Protocol</Table.Cell>
                    <Table.Cell><code>{props.request.attributes.protocol}</code></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Remote Address</Table.Cell>
                    <Table.Cell><code>{props.request.attributes.remote_addr}</code></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>User Agent</Table.Cell>
                    <Table.Cell><code>{props.request.attributes.user_agent}</code></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Content Length</Table.Cell>
                    <Table.Cell><code>{props.request.attributes.content_length}</code> bytes</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Requested Time</Table.Cell>
                    <Table.Cell><NiceDate date={props.request.meta.created.utc} /></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Request ID</Table.Cell>
                    <Table.Cell><code>{props.request.id}</code></Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    )
}

export default RequestInfoTable
