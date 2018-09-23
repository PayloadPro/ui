import { Icon } from 'semantic-ui-react'

const colorForRequestMethod = {
    GET: 'purple',
    POST: 'green',
    PUT: 'orange',
    PATCH: 'yellow',
    DELETE: 'red',
    OPTIONS: 'teal',
    HEAD: 'blue'
}

const RequestIcon = (props) => {
    const color = props.request ? (colorForRequestMethod[props.request.attributes.method]) : 'grey'
    return (
        <Icon circular name='file alternate' color={color} />
    )
}

export default RequestIcon
