const chalk = require('chalk')

const nota = 6


if(nota >= 7){
    console.log(chalk.green.bold('Aluno aprovado'))
}
else{
    console.log(chalk.bgRed.black('Aluno reprovado'))
}