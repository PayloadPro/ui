import React from 'react'
import Layout from '../layout/layout.js'

const Error = (props) => (
    <Layout>
        <p>
            {props.statusCode
                ? `A ${props.statusCode} occurred on server`
                : 'An error occurred on client'}
        </p>
    </Layout>
)

Error.getInitialProps = async function ({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
}

export default Error;
