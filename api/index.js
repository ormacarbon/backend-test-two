const express = require('express')
const routes = require('./routes')
const port = 3000
const server = express()

routes(server)


server.get('/', (req, res) => {
    return res.status(200).json({
        "mensagem": "API Beers running"
    })
})

server.listen(port, () => {
    console.log(`Server is on in ${port}`)
})

module.exports = server
