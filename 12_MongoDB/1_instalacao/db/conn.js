const { MongoClient } = require('mongodb')

const uri = "mongodb://localhost:27017/testemongodb"

const client = new MongoClient(uri)

async function run(){
    try {
        await client.connect()
        console.log('Conectado ao banco')
    } catch (error) {
        console.log("🚀 ~ file: conn.js ~ line 11 ~ run ~ error", error)        
    }
}

run()
module.exports = client