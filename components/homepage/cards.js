import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

class HomepageCards extends React.Component {
    cards = [
        {
            header: 'Fast & Light',
            icon: 'globe',
            description: 'Written in Go, Payload Pro offers incredible performance. Expect local response times of < 10ms without any caching.',
        },
        {
            header: 'All Request Methods',
            icon: 'envelope open outline',
            description: 'Send and inspect GET, POST, PUT, PATCH, DELETE, HEAD and OPTIONS request methods to capture along with the request info.',
        },
        {
            header: 'Open Source',
            icon: 'code',
            description: 'The project is entirely open source - run it on your own servers or in your local development environment if you want to.',
        },
        {
            header: 'Hosted & Secure',
            icon: 'building',
            description: 'The public API is fully hosted and allows you to test your payloads immediately and uses SSL for secure payload delivery.',
        },
        {
            header: 'CI/CD Compatible',
            icon: 'code branch',
            description: 'Create bins, make requests and view the results via the API (SDK\'s coming soon!).Bake right into your own QA and Deployment pipelines.',
        },
        {
            header: 'Built in UI',
            icon: 'tv',
            description: 'We provide a UI to allow you to create, view and inspect your bins and requests that you can use locally or online. Written in React.'
        },
    ]
    render() {
        return (
            <Card.Group itemsPerRow={3}>
                {this.cards.map((card, i) => {
                    return (
                        <Card key={i}>
                            <Card.Content>
                                <Card.Header textAlign='left'>
                                    <Icon name={card.icon} />&nbsp;&nbsp;&nbsp;{card.header}
                                </Card.Header>
                            </Card.Content>
                            <Card.Content textAlign='left'>
                                <p>
                                    {card.description}
                                </p>
                            </Card.Content>
                        </Card>
                    )
                })}
            </Card.Group>
        )
    }
}

export default HomepageCards
