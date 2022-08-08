const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')
const path = require('path')
const app = express()

const pool = require('./db/conn')

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

    const query = `INSERT INTO books (??, ??) VALUE (?, ?)`
    const data = ['title', 'pageqty', title, pagesqty]


    pool.query(query, data, function (err) {
        if (err) {
            console.log("🚀 ~ file: index.js ~ line 30 ~ pool.query ~ err", err)
            return
        }

        res.redirect('/books')
    })
})

app.get('/books', (req, res) => {
    const query = "SELECT * FROM books"

    pool.query(query, function (err, data) {
        if (err) {
            console.log("🚀 ~ file: index.js ~ line 43 ~ pool.query ~ err", err)
            return
        }

        const books = data
        res.render('books', { books })

    })
})

app.get('/books/:id', (req, res) => {
    const id = req.params.id

    const query = `SELECT * FROM books WHERE ?? = ?`
    const data = ['id', id]
    pool.query(query, data, function (err, data) {
        if (err) {
            console.log("🚀 ~ file: index.js ~ line 58 ~ pool.query ~ err", err)
            return
        }
        const book = data[0]

        res.render('book', { book })
    })
})

app.get('/books/edit/:id', (req, res) => {
    const id = req.params.id

    const query = `SELECT * FROM books WHERE id = ${id}`

    pool.query(query, function (err, data) {
        if (err) {
            console.log("🚀 ~ file: index.js ~ line 75 ~ pool.query ~ err", err)
            return
        }

        const book = data[0]

        res.render('editbook', { book })
    })
})

app.post('/books/updatedbook', (req, res) => {

    const id = req.body.id
    const title = req.body.title
    const pageqty = req.body.pagesqty

    const sql = ` UPDATE books SET ?? = ?, ??= ? WHERE ?? =?`
    const data = ['title', title, 'pageqty', pageqty, 'id', id]
    pool.query(sql, data, function(err){
        if(err){
            console.log(err)
            return
        }

        res.redirect('/books')
    })

})

app.post('/books/remove/:id', (req, res)=>{

    const id = req.params.id
    const sql = `DELETE FROM books WHERE id = ${id}` 

    pool.query(sql, function(err){
        if(err){
            console.log(err)
            return
        }

        res.redirect('/books')
    })

})


app.listen(3000)