const mongoose = require('mongoose')
const {conectar, desconectar} = require('./dbconfig')
// Scheemas

const senhaScheema = new mongoose.Schema({
    Descricao: String,
    Senha: String
})

// Models
const SenhaModel = mongoose.model('Senha', senhaScheema, 'senhas')

// functions
async function salvarSenha (senha , descricao) {
    // Salvar a senha e a descrição no banco de dados
    try {
        await conectar()
    const senhaEscopo = new SenhaModel({
        Descricao: descricao,
        Senha: senha
    })

    await senhaEscopo.save()
    
    } catch (err) {
        console.log(err)

    } finally {
        desconectar()
    }
}

async function coletarSenhas(){
    try {
        await conectar()
        const resultado = await SenhaModel.find()
        return resultado
    } catch (error) {
        console.log('Erro no db.js' , error.message)
    } finally{
        desconectar()
    }
}

module.exports = {
    salvarSenha,
    coletarSenhas
}

