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

const RequestIconColored = (props) => {
    const color = colorForRequestMethod[props.request.attributes.method]
    return (
        <Icon name='file alternate' color={color} />
    )
}

export default RequestIconColored
