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
                case 'Depositar': deposit(); break;
                case 'Consultar saldo': getAccountBalance(); break;
                case 'Sacar': withdraw(); break;
                case 'Sair': console.log(chalk.bgBlue.black('Obrigado por usar o Accounts')); process.exit(); break;
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
    buildAccount()

}

//

function buildAccount() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Digite um nome para sua conta:'
        }
    ]).then(answer => {
        const accountName = answer['accountName']
        console.info(accountName)

        if (!fs.existsSync('accounts')) {
            fs.mkdirSync('accounts')
        }
        if (fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(chalk.bgRed.black('Esta conta já existe, escolha outro nome'))
            buildAccount()
            return
        }

        fs.writeFileSync(`accounts/${accountName}.json`, '{"balance":0}', function (err) {
            console.log(err)
        })
        console.log(chalk.green('Parabéns, a sua conta foi criada com sucesso!!'))
        operation()
    }).catch((err) => { console.log(err) })
}

function deposit() {
    inquirer.prompt([{
        name: "accountName",
        message: "Qual o nome da sua conta?"
    }]).then((answer) => {
        const accountName = answer['accountName']

        if (!checkAccount(accountName)) {
            return deposit()
        }
        inquirer.prompt([{
            name: 'amount',
            message: 'Qual o valor do deposito'
        }]).then(
            (answer) => {
                const amount = answer['amount']
                addAmount(accountName, amount)
                operation()

            }
        ).catch((err) => console.log(err))
    }
    ).catch(err => console.log(err))
}

function checkAccount(accountName) {
    if (!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black('Esta conta não existe, escolha outra conta!!!'))
        return false
    }

    return true
}

function addAmount(accountName, amount) {
    const account = getAccount(accountName)

    if (!amount) {
        console.log(chalk.red('Ocorreu um erro, tente mais tarde!'))
        return deposit()
    }

    account.balance = parseFloat(amount) + parseFloat(account.balance)

    fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(account),
        function (err) {
            console.log(err)
        })

    console.log(chalk.bgGreen.black(`Operação realizada com sucesso, foi depositado o valor de R$${amount}`))

}

function getAccount(accountName) {
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf8',
        flag: 'r'
    })

    return JSON.parse(accountJSON)
}

function getAccountBalance() {
    inquirer.prompt([{
        name: "accountName",
        message: "Qual o nome da sua conta?"
    }]).then((answer) => {

        const accountName = answer["accountName"]
        if (!checkAccount(accountName)) {
            return getAccountBalance()
        }

        const accountData = getAccount(accountName)

        console.log(chalk.bgBlue.black(`Olá ${accountName}, seu saldo é de R$${accountData.balance}`))
        operation()

    }).catch(err => console.log(err))
}

function withdraw() {
    inquirer.prompt([{
        name: "accountName",
        message: "Digite sua conta"
    }]).then((answer) => {
        const accountName = answer['accountName']
        if (!checkAccount(accountName)) {
            return withdraw()
        }

        inquirer.prompt([{
            name: "amount",
            message: "Qual valor?"
        }]).then((answer) => {

            const amount = answer['amount']

            removeAmount(accountName, amount)


        }).catch(err => console.log(err))
    }).catch(err => console.log(err))
}

function removeAmount(accountName, amount) {
    const accountData = getAccount(accountName)

    if (!amount) {
        console.log(chalk.bgRed.black('Occorreu um erro, tente novamente'))
        return withdraw()
    }

    if (accountData.balance < amount) {
        console.log(chalk.bgRed.black('Valor indisponível'))
        return withdraw()
    }

    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)

    fs.writeFileSync(
        `accounts/${accountName}.json`, 
        JSON.stringify(accountData),
        function(err){
            console.log(err)
        }
    )

    console.log(chalk.green(`Foi realizado um saque de R$${amount} da sua conta`))
    operation()
}