const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Conectado ao banco')
} catch (error) {
    console.log("🚀 ~ file: conn.js ~ line 11 ~ error", error)

}

exports.default = sequelize