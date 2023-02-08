const express = require('express')
const bodyParser = require('body-parser')

const port = 3000

const server = express()

server.use(bodyParser.json())

server.get('/', (req, res) => {
    return res.status(200).json({
        "mensagem": "API Beers running"
    })
})

server.listen(port, () => {
    console.log(`Server is on in ${port}`)
})
