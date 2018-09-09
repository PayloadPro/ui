import React from 'react'
import { Grid, Header, Statistic, Loader } from 'semantic-ui-react'
import RequestIcon from '../requests/icon'
import { RelativeDate } from '../../utils/dates'
import { Poll } from "restful-react"

const BinHeader = (props) => (
    <Poll base='http://localhost:8081' path={`/bins/${props.bin.id}`} resolve={response => JSON.parse(response)} interval={2000} lazy={false}>
        {(response, { loading, error }, { start }) => {

            let bin = {}
            if (response !== null && response.data !== undefined) {
                bin = response.data
            }

            return loading ? (
                <Loader active inverted />
            ) : (
                    <Grid divided='vertically'>
                        <Grid.Row columns={2}>
                            <Grid.Column width={11}>
                                <Header as='h2'>
                                    <RequestIcon request={props.request} />
                                    <Header.Content>
                                        {bin.attributes.name}
                                        {/* <Header.Subheader>Created <RelativeDate date={bin.meta.created.utc} /></Header.Subheader> */}
                                    </Header.Content>
                                </Header>
                            </Grid.Column>
                            <Grid.Column floated='right' width={5}>
                                <Statistic horizontal>
                                    <Statistic.Value>{bin.meta.stats.requests.total}</Statistic.Value>
                                    <Statistic.Label color='grey'>Requests to this bin</Statistic.Label>
                                </Statistic>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                );
        }}
    </Poll>
)

export {
    BinHeader
}
