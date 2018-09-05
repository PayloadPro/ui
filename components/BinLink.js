import Link from 'next/link'

const BinLink = (props) => {
    const url = '/bins/' + props.bin.id
    return (
        <Link href={url}>
            <a>
                {props.bin.attributes.name}
            </a>
        </Link>
    )
}

export default BinLink
