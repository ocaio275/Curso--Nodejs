const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/dashboard', (req, res) => {

    const itens = ['item a', 'item b', 'item c', 'item d']

    res.render('dashboard', { itens })
})
app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender Node.js',
        category: 'Javascript',
        body: 'Este artigo vai te ajudar node.js',
        comments: 4
    }

    res.render('blogpost', { post })
})

app.get('/blog', (req, res) => {
    const post = [
        {
            title: 'Aprender Node.js parte 2',
            category: 'Javascript 2',
            body: 'Este artigo vai te ajudar node.js 2',
            comments: 8
        },
        {
            title: 'Aprender PHP',
            category: 'PHP',
            body: 'Este artigo vai te ajudar PHP',
            comments: 3
        },
        {
            title: 'Aprender HTML',
            category: 'HTML',
            body: 'Este artigo vai te ajudar HTML',
            comments: 15
        }

    ]
    res.render('blog', {post})
})

app.get('/', (req, res) => {
    const user = {
        nome: 'Caio',
        sobrenome: 'Santos'
    }
    const teste = 'teste'
    const auth = true

    const approved = true

    res.render('home', { user: user, teste, auth, approved })

})

app.listen(3000, () => {
    console.log('Server rodando na 3000')
})