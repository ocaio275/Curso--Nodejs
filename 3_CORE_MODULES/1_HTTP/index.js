const http = require("http")
const port = 3000



const server = http.createServer((req, res)=>{

    res.write('hello word')
    res.end()
})

server.listen(port, ()=>{
    console.log(`Servidor rodando http://localhost:${port}`)
})