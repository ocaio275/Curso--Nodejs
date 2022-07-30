const express = require('express')
const app = express()
const port = 3000
const router = require('./users/index')
const path = require('path')
const basePath = path.join(__dirname, '/templates')
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use(express.static('public'))


app.use('/users', router)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.use(function (req, res, next) {
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})