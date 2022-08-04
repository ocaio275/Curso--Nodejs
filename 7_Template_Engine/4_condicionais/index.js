const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')
app.get('/dashboard', (req, res)=>{
    res.render('dashboard')
})
app.get('/', (req, res)=>{
    const user = {
        nome: 'Caio',
        sobrenome: 'Santos'
    }
    const teste = 'teste'
    const auth = true

    const approved = true

    res.render('home', {user: user, teste, auth, approved})
   
})

app.listen(3000,()=>{
    console.log('Server rodando na 3000')
})