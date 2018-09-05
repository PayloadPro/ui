import BinLink from './link'

const BinList = (props) => {
    return (
        <ul>
            {props.bins.map((bin) => (
                <li key={bin.id}>
                    <BinLink bin={bin} />
                </li>
            ))}
        </ul>
    )
}

export default BinList
