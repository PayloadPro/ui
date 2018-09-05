import TimeAgo from 'react-timeago'

const RelativeDate = (props) => {
    const date = Date.parse(props.date)
    return (<TimeAgo date={date} />)
}

export default RelativeDate
