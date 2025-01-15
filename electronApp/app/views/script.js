const senhaSpan = document.getElementById('resultado')

const numero = document.getElementById('numero')
const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

document.getElementById('gerar-senha').addEventListener('click',  () => {  
        const resultado = senhaSpan
        resultado.innerHTML = ''
        
        let _numero = numero.value

        let senha = ''

        for (let i = 0, n = chars.length; i < _numero; i++) {
            senha += chars.charAt(Math.floor(Math.random() * n))
        }

        //console.log('Senha: ' + senha)
        resultado.innerHTML += senha
    }
)

document.getElementById('salvar-senha').addEventListener('click' , () => {
    // pegar a senha gerada e a descrição
    console.log('click!')
    const senha = senhaSpan.innerText
    const descricao = document.getElementById('descricao').value

    if(!senha || !descricao){
        console.log('senha ou descrição não encontradas')
        return

    }

    try {
        fetch('http://localhost:3000/salvar-senha', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({senha , descricao})
        })
        
    } catch (err) {
        console.log('erro no script' , err.message)
    }
})

document.getElementById('carregar-senhas').addEventListener('click', async () => {
    console.log('click!')
    try{
        const response = await fetch('http://localhost:3000/mostrar-senhas')
        const senhas = await response.json()

        const container = document.getElementById('container')

        container.innerHTML = ''
        senhas.forEach(senha => {
            const itemDiv = document.createElement('div')
            itemDiv.innerHTML = `<h3>${senha.Descricao}</h3><p>${senha.Senha}</p>`
            container.appendChild(itemDiv)
        })
    } catch (error) {
        console.log('Erro no script' , error.message)
    }
})