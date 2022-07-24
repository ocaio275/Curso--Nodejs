console.log(process.argv)

const arg = process.argv.slice(2)

console.log(arg)

const nome = arg[0].split("=")[1]

const idade = arg[1].split("=")[1]
console.log(`O nome dele(a) é ${nome} e ele(a) tem ${idade} anos`)

