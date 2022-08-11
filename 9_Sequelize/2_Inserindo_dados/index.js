const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql2')
const path = require('path')
const app = express()

const conn = require('./db/conn')

const User = require('./models/User')
const Address = require('./models/Address')

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/users/create', (req, res) => {
    res.render('adduser')
})
app.post('/users/create', async (req, res) => {
    const name = req.body.name
    const occupation = req.body.occupation
    let newletter = req.body.newsletter

    if (newletter === 'on') {
        newletter = true
    } else {
        newletter = false
    }

    await User.create({
        name,
        occupation,
        newletter
    })
    res.redirect('/')
})

app.get('/users/:id', async (req, res) => {
    const id = req.params.id

    const user = await User.findOne({ raw: true, where: { id: id } })

    res.render('userview', { user })
})


app.post('/users/delete/:id', async (req, res) => {
    const id = req.params.id

    await User.destroy({ where: { id: id } })
    res.redirect('/')
})

app.get('/users/edit/:id', async (req, res) => {
    const id = req.params.id

    try {

        const user = await User.findOne({ include: Address, where: { id: id } })

        res.render('useredit', { user: user.get({ plain: true }) })
    } catch (error) {
        console.log("🚀 ~ file: index.js ~ line 70 ~ app.get ~ error", error)

    }
})

app.post('/users/update', async (req, res) => {
    const { id, name, occupation } = req.body
    let { newletter } = req.body

    if (newletter === 'on') {
        newletter = true
    } else {
        newletter = false
    }
    const userData = {
        id,
        name,
        occupation,
        newletter
    }

    await User.update(userData, { where: { id: id } })
    res.redirect('/')
})
app.get('/', async (req, res) => {
    const users = await User.findAll({ raw: true })

    // console.log(users)

    res.render('home', { users: users })
})

app.post('/address/create', async (req, res) => {
    const { UserId, street, number, city } = req.body

    const address = {
        UserId,
        street,
        number,
        city
    }

    await Address.create(address)
    res.redirect(`/users/edit/${UserId}`)
})


app.post('/address/delete' , async (req, res)=>{

    const {id, UserId} = req.body

    await Address.destroy({
        where:{ id: id}
    })

    res.redirect(`/users/edit/${UserId}`)
})

conn
    .sync()
    //.sync({force: true})
    .then(() => {
        app.listen(3000)
    }).catch((err) => console.log(err))
