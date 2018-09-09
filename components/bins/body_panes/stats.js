import { Grid } from 'semantic-ui-react'

import { BarChart } from './stats/bar-chart'
import { Breakdown } from './stats/breakdown'

const Stats = (props) => {
    return (
        <Grid divided='vertically'>
            <Grid.Row columns={2}>
                <Grid.Column width={4}>
                    <Breakdown bin={props.bin} />
                </Grid.Column>
                <Grid.Column width={12}>
                    <BarChart bin={props.bin} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default Stats
