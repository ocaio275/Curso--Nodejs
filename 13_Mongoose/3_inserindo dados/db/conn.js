const mongoose = require('mongoose')

async function main(){
    await mongoose.connect('mongodb://localhost:27017/mongooseteste')
    console.log('Conectado')
}
main().catch((err)=>console.log(err))

module.exports = mongoose