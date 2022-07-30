const express = require('express').Router
const router = express()
const path = require('path')

const basePath = path.join(__dirname, '../templates')

router.get('/add', (req, res)=>{
    res.sendFile(`${basePath}/userform.html`)
})

router.post('/save', (req,res)=>{
    
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age


    console.log(`Nome do usuário é ${name} e ele tem ${age} anos`)

    res.sendFile(`${basePath}/userform.html`)


})
router.get('/:id', (req, res)=>{
    const id = req.params.id

    console.log(`get user id: ${id}`)
    res.sendFile(`${basePath}.html`)
})


module.exports = router