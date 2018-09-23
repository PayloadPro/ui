import { HorizontalBar } from 'react-chartjs-2';

const BarChart = (props) => {
    return (
        <HorizontalBar options={options()} data={data(props.bin)} />
    )
}

const colorForRequestMethod = {
    GET: '#DC73FF',
    POST: '#2ECC40',
    PUT: '#FF851B',
    PATCH: '#FFE21F',
    DELETE: '#FF695E',
    OPTIONS: '#6DFFFF',
    HEAD: '#54C8FF',
}

const options = () => {
    return {
        scales: {
            xAxes: [{
                stacked: true
            }]
        },
        legend: {
            display: false,
        },
        animation: false,
        cutoutPercentage: 60,
    }
}

const data = (bin) => {

    const data = {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: [],
            borderColor: [],
            borderWidth: 1
        }]
    };

    const requestsStats = bin.meta.stats.requests.break_down

    if (requestsStats !== null) {
        Object.keys(requestsStats).map(key => {
            data.labels.push(key)
            data.datasets[0].data.push(requestsStats[key])
            data.datasets[0].borderColor.push(colorForRequestMethod[key])
            data.datasets[0].backgroundColor.push(colorForRequestMethod[key])
        })
    }

    return data
}


export { BarChart }
