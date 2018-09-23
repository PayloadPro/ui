import TimeAgo from 'react-timeago'

class NiceDate extends React.Component {
    render() {
        return (
            new Intl.DateTimeFormat('en-GB', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            }).format(Date.parse(this.props.date))
        )
    }
}

class RelativeDate extends React.Component {
    render() {
        return (
            <TimeAgo date={Date.parse(this.props.date)} />
        )
    }
}

export {
    NiceDate,
    RelativeDate,
}
