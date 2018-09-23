const express = require('express')
const next = require('next')
const nextConfig = require('./next.config');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: __dirname, conf: nextConfig });
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()

        server.get('/bins/:id', (req, res) => {
            const actualPage = '/bin'
            const queryParams = { id: req.params.id }
            app.render(req, res, actualPage, queryParams)
        })

        server.get('/bins/:id/requests', (req, res) => {
            const actualPage = '/bin'
            const queryParams = { id: req.params.id }
            app.render(req, res, actualPage, queryParams)
        })

        server.get('/bins/:id/requests/:rid', (req, res) => {
            const actualPage = '/bin'
            const queryParams = { id: req.params.id, rid: req.params.rid }
            app.render(req, res, actualPage, queryParams)
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })
