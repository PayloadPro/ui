import Link from 'next/link'
import EllipsisText from 'react-ellipsis-text';

const RequestLink = (props) => {
    const url = '/bins/' + props.bin.id + '/requests/' + props.request.id
    return (
        <Link href={url}>
            <a>
                <EllipsisText text={props.request.id} length={15} />
            </a>
        </Link>
    )
}

export default RequestLink
