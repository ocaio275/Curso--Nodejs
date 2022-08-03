const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.render('home')
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
})

conn.connect(function(err){
    if(err){
    console.log("🚀 ~ file: index.js ~ line 25 ~ conn.connect ~ err", err)        
    }
    console.log('Conectado ao banco')
})

app.listen(3000)