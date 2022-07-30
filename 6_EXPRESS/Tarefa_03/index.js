const express = require('express')
const app = express()
const port = 5000
const path = require('path')
const basePath = path.join(__dirname, './templates')


app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.use(express.static('public'))

const produtosRoutes = require('./produtos')

app.use('/produtos', produtosRoutes)

app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, ()=>{ console.log(`Rodando na porta: ${port}`)})