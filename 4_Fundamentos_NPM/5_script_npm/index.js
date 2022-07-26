const _ = require('lodash')
const chalk = require('chalk')

const a = [3,67,6,5]
const b = [3,67,9,5]

const diff = _.difference(a,b)

console.log(chalk.bgRed.bold(diff))
