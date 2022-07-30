const express = require('express').Router
const produtosRoutes = express()

const path = require('path')

const basePath = path.join(__dirname, '../templates')

produtosRoutes.get('/addProduto', (req, res)=>{
    res.sendFile(`${basePath}/produtoForm.html`)
})

produtosRoutes.post('/save', (req,res)=>{
    
    console.log(req.body)

    const name = req.body.name
    const age = req.body.price


    res.sendFile(`${basePath}/produtoForm.html`)


})


module.exports = produtosRoutes