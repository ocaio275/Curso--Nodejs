const fs = require('fs')

const old_file = "arquivo.txt"
const new_file = "novoArquivo.txt"

fs.rename(old_file, new_file, function (err) {
    if (err) {
        console.log(err)
        return
    }

    console.log(`Arquivo renomeado de ${old_file} para ${new_file}`)
})