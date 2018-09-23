import React from 'react'
import { Divider, Grid, Header, Statistic, Loader } from 'semantic-ui-react'
import RequestIcon from '../requests/icon'
import { RelativeDate } from '../../utils/dates'
import { Poll } from "restful-react"

import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

const BinHeader = (props) => (
    <Poll base={API_URL} path={`/bins/${props.bin.id}`} resolve={response => JSON.parse(response)} interval={2000} lazy={false}>
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
                            <Grid.Column width={8}>
                                <Header as='h2'>
                                    <RequestIcon request={props.request} />
                                    <Header.Content>
                                        {bin.attributes.name}
                                        {/* <Header.Subheader>Created <RelativeDate date={bin.meta.created.utc} /></Header.Subheader> */}
                                    </Header.Content>
                                </Header>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Statistic horizontal>
                                    <Statistic.Value>{bin.meta.stats.requests.total}</Statistic.Value>
                                    <Statistic.Label color='grey'>Requests have been made to this bin</Statistic.Label>
                                </Statistic>
                                <Divider />
                                <p><em>API Endpoint to make requests to:</em><br /><a href='{bin.links.request}'>{bin.links.request}</a><br /></p>
                            </Grid.Column>
                        </Grid.Row>
                        <Divider />
                    </Grid>
                );
        }}
    </Poll>
)

export {
    BinHeader
}
