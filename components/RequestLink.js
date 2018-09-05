import Link from 'next/link'

const RequestLink = (props) => {
    const url = '/bins/' + props.bin.id + '/requests/' + props.request.id
    return (
        <Link href={url}>
            <a>
                {props.request.attributes.method}
            </a>
        </Link>
    )
}

export default RequestLink
