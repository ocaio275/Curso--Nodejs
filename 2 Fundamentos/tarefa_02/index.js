const chalk = require('chalk')
const inquirer = require('inquirer')

inquirer.prompt([
    {
        name: 'p1',
        message: "Qual é o seu nome completo? "
    },
    {
        name: 'p2',
        message: "Informe sua idade: "
    }
]).then(
    (res) =>{
        if(!res.p1 && !res.p2){
            throw new Error("Os campos são obrigatórios!!!")
        }
        console.log(chalk.bgYellow.black(`Seu nome é: ${res.p1} e sua idade: ${res.p2} anos`))
    }
).catch(
    err => console.log(err)
)