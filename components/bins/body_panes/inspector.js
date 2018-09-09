import { Grid } from 'semantic-ui-react'

import RequestListTable from '../../requests/list-table'
import RequestInfoTable from '../../requests/info-table'

const Inspector = (props) => {
    return (
        <Grid divided='vertically'>
            <Grid.Row columns={2}>
                <Grid.Column width={4}>
                    <RequestListTable requests={props.requests} bin={props.bin} />
                </Grid.Column>
                <Grid.Column width={12}>
                    <RequestInfoTable request={props.request} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default Inspector
