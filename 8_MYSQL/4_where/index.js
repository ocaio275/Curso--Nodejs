const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

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

app.post('/books/insertbook', (req, res) => {
    const title = req.body.title
    const pagesqty = req.body.pagesqty

    const query = `INSERT INTO books (title, pageqty) VALUE ('${title}', ${pagesqty})`

    conn.query(query, function (err) {
        if (err) {
            console.log("🚀 ~ file: index.js ~ line 30 ~ conn.query ~ err", err)
            return
        }

        res.redirect('/books')
    })
})

app.get('/books', (req, res) => {
    const query = "SELECT * FROM books"

    conn.query(query, function (err, data) {
        if (err) {
            console.log("🚀 ~ file: index.js ~ line 43 ~ conn.query ~ err", err)
            return
        }

        const books = data
        res.render('books', { books })

    })
})

app.get('/books/:id', (req, res) => {
    const id = req.params.id

    const query = `SELECT * FROM books WHERE id = ${id}`
    conn.query(query, function (err, data) {
        if (err) {
            console.log("🚀 ~ file: index.js ~ line 58 ~ conn.query ~ err", err)
            return
        }
        const book = data[0]

        res.render('book', { book })   
    })
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
})

conn.connect(function (err) {
    if (err) {
        console.log("🚀 ~ file: index.js ~ line 25 ~ conn.connect ~ err", err)
    }
    console.log('Conectado ao banco')
})

app.listen(3000)