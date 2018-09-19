import BinLink from './link'
import { Icon, List } from 'semantic-ui-react'

const BinList = (props) => {
    return (
        <List relaxed='very'>
            {props.bins.map((bin) => (
                <List.Item key={bin.id}>
                    <Icon name='home' />
                    <List.Content>
                        <BinLink bin={bin} />
                    </List.Content>
                </List.Item>
            ))}
        </List>
    )
}

export default BinList
