import React from 'react'
import { Card } from 'semantic-ui-react'

class HomepageCards extends React.Component {
    cards = [
        {
            header: 'Fast & Light',
            description: 'Written in Go, Payload Pro offers incredible performance. Expect local response times of < 3ms.',
        },
        {
            header: 'All Request Methods',
            description: 'Send and inspect GET, POST, PUT, PATCH, DELETE and OPTIONS request methods.',
        },
        {
            header: 'Open Source',
            description: 'The project is entirely open source - run it on your own servers or in your local development environment if you want to.',
        },
        {
            header: 'Hosted & Secure',
            description: 'The public API is fully hosted and allows you to test your payloads immediately and uses SSL for secure payload delivery.',
        },
        {
            header: 'CI/CD Compatible',
            description: 'Create bins, make requests and view the results via the API (SDK\'s coming soon!).Bake right into your own QA and Deployment pipelines.',
        },
        {
            header: 'Built in UI',
            description: 'View and inspect your bins requests via the React UI',
        },
    ]
    render() {
        return (
            <Card.Group centered>
                {this.cards.map((card, i) => {
                    return (
                        <Card key={i}>
                            <Card.Content>
                                <Card.Header textAlign='center'>
                                    {card.header}
                                </Card.Header>
                            </Card.Content>
                            <Card.Content textAlign='center'>
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
