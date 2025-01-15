const mongoose = require('mongoose')


const conectar = async() => {
    try{
        await mongoose.connect('mongodb://dbElectron:27017/appSenhas')
        
        console.log('Em conexão com o banco de dados.')
    } catch (erro) {
        console.log(erro.message)
    }
}

const desconectar = async() => {
    await mongoose.disconnect()
    console.log('Conexão com o banco de dados encerrada')
}


module.exports = {
    conectar,
    desconectar
}