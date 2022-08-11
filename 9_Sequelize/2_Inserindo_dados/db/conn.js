const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})
// try {
//     sequelize.authenticate()
//     console.log('conectado ao sequelize')
// } catch (error) {
// console.log("🚀 ~ file: conn.js ~ line 10 ~ error", error)
    
// }

module.exports = sequelize