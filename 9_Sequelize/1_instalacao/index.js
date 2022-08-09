const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql2')
const path = require('path')
const app = express()

const conn = require('./db/conn')

const User = require('./models/User')

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})


conn.sync().then(() => {
    app.listen(3000)
}).catch((err) => console.log(err))
