const path = require('path')

console.log(path.resolve('teste.txt'))

const midFolder = 'relatorios'
const fileName = 'caio.pdf'
const finalPath = path.join('/', 'arquivos',midFolder, fileName)
console.log(finalPath)