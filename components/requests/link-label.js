import { Label } from 'semantic-ui-react'

const colorForRequestMethod = {
    GET: 'purple',
    POST: 'green',
    PUT: 'orange',
    PATCH: 'yellow',
    DELETE: 'red',
    OPTIONS: 'teal',
    HEAD: 'blue'
}

const RequestLinkLabel = (props) => {
    const color = colorForRequestMethod[props.request.attributes.method]
    return (
        <Label color={color}>{props.request.attributes.method}</Label>
    )
}

export default RequestLinkLabel
