import Layout from '../layout/layout.js'
import RelativeDate from '../utils/date-relative'
import RequestInfoTable from '../components/requests/info-table'
import fetch from 'isomorphic-unfetch'
import React from 'react'
import { Grid, Header, Tab, Table, Statistic, Divider } from 'semantic-ui-react'
import RequestIconColored from '../components/requests/icon-coloured'
import RequestListTable from '../components/requests/list-table'
import { Bar } from 'react-chartjs-2';

const BinHeader = (props) => (
  <Grid divided='vertically'>
    <Grid.Row columns={2}>
      <Grid.Column width={11}>
        <Header as='h2'>
          <RequestIconColored request={props.request} />
          <Header.Content>
            {props.bin.attributes.name}
            <Header.Subheader>Created <RelativeDate date={props.bin.meta.created.utc} /></Header.Subheader>
          </Header.Content>
        </Header>
      </Grid.Column>
      <Grid.Column floated='right' width={5}>
        <Statistic horizontal>
          <Statistic.Value>{props.bin.meta.stats.requests.total}</Statistic.Value>
          <Statistic.Label color='grey'>Requests to this bin</Statistic.Label>
        </Statistic>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

const Request = (props) => (
  <Layout>
    <BinHeader request={props.request} bin={props.bin} />
    <Tab
      chartoptions={props.chartOptions}
      chartdata={props.chartData}
      request={props.request}
      requests={props.requests}
      bin={props.bin}
      menu={{ secondary: true, pointing: true }}
      panes={panes}
    />
  </Layout>
)
const panes = [
  {
    menuItem: 'Request Inspector', render: (props) => (
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
  },
  {
    menuItem: 'Bin Stats', render: (props) => (
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column width={7}>
            <Header size='medium'>Broken down by Request Method</Header>
            <Divider />
            <Bar options={props.chartoptions} data={props.chartdata} />
            <Table definition>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Method</Table.HeaderCell>
                  <Table.HeaderCell>Requests</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>1</Table.Cell>
                  <Table.Cell>Resets rating to default value</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
          <Grid.Column width={7}>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    )
  },
  {
    menuItem: 'Make Requests', render: (props) => (
      <p>Coming Soon!</p>
    )
  }
]
const colorForRequestMethod = {
  GET: 'purple',
  POST: 'green',
  PUT: 'orange',
  PATCH: 'yellow',
  DELETE: 'red',
  OPTIONS: 'teal',
  HEAD: 'blue'
}

const GenerateChartData = (bin) => {

  const data = {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: [],
    }]
  };

  const requestsStats = bin.meta.stats.requests.break_down

  Object.keys(requestsStats).map(key => {
    data.labels.push(key)
    data.datasets[0].data.push(requestsStats[key])
    data.datasets[0].backgroundColor.push(colorForRequestMethod[key])
  })

  const options = {
    legend: {
      display: false,
    },
    animation: false,
    cutoutPercentage: 60,
  }

  return { chartData: data, chartOptions: options }
}

Request.getInitialProps = async function (context) {

  const { id, rid } = context.query

  const binRes = await fetch(`http://localhost:8081/bins/${id}`)
  const allReqs = await fetch(`http://localhost:8081/bins/${id}/requests`)
  const res = await fetch(`http://localhost:8081/bins/${id}/requests/${rid}`)

  const { data: bin } = await binRes.json()
  const { data: requests } = await allReqs.json()
  const { data: request } = await res.json()

  const { chartData, chartOptions } = GenerateChartData(bin)
  return { bin, request, requests, chartData, chartOptions }
}

export default Request
