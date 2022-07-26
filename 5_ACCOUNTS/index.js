//Modulos externos
const inquirer = require('inquirer')
const chalk = require('chalk')


//Modulos internos
const fs = require('fs')

operation()

function operation() {
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: "Qual operação você deseja realizar?",
        choices: [
            'Criar conta',
            'Consultar saldo',
            'Depositar',
            'Sacar',
            'Sair'
        ]
    }])
        .then((resp) => {
            const action = resp['action']

            switch (action) {
                case 'Criar conta': createAccount(); break;
                case 'Consultar saldo': teste(); break;
                case 'Depositar': ; break;
                case 'Sacar': console.log('Sacar'); break;
                case 'Sair': console.log('Sair'); break;
            }
        })
        .catch((err) => {
            console.log(err)
        })
}


//Criação de conta
function createAccount() {
    console.log(chalk.bgGreen.black('Parabéns por escolher nosso banco!!'))
    console.log(chalk.green('Defina as opções da sua conta a seguir:'))
}

//

function buildAccount() {
    inquirer.prompt([
        {
            
        }
    ])
}

function teste(){
    console.log('teste de deposito')
}