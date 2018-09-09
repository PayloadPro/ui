import { Table } from 'semantic-ui-react';

class Breakdown extends React.Component {
    render() {
        return (
            <Table definition>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Method</Table.HeaderCell>
                        <Table.HeaderCell>Requests</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {Object.keys(this.props.bin.meta.stats.requests.break_down).map((name, i) => (
                        <Table.Row key={i}>
                            <Table.Cell>{name}</Table.Cell>
                            <Table.Cell>{this.props.bin.meta.stats.requests.break_down[name]}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        )
    }
}

export { Breakdown }
