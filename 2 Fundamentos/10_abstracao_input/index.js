const inquirer = require('inquirer')

inquirer.prompt([
    {
        name: 'P1',
        message: 'Qual é a 1º nota? ',
    },
    {
        name: 'P2',
        message: 'Qual é a 2º nota?',
    }
])
.then(
    (res) =>{
        console.log(res)
        const med = ((parseInt(res.P1) + parseInt(res.P2)) / 2)
        console.log(`A média do aluno é: ${med}`)
    }
)
.catch(
    err => console.log(err)
)