const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const cors = require('cors')


// funções db
const {salvarSenha , coletarSenhas} = require('./app/db/db.js')

// Arquivos estaticos
app.use(express.static(path.join(__dirname,'app', 'views')))


// middleware
app.use(express.json())
app.use(cors())

// rotas get
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'app', 'views', 'index.html'))
})
app.get('/mostrar-senhas', async (req, res) => {
    try { 
        const senhas = await coletarSenhas()
        res.json(senhas)
    } catch (error) {
        console.log('Erro no processo de API' , error.message)
    }
})

// rotas post
app.post('/salvar-senha', (req, res) => {
    const {senha , descricao} = req.body
    try{
        salvarSenha(senha , descricao)
    } catch (err) {
        console.log('Erro no processo de API' , err.message)
    }
})


app.listen(port, () => {
    console.log(`Servidor express conectado na porta ${port}`)
})