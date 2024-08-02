import express from 'express'
const servidor = express()
servidor.use(express.json())

servidor.get('/calculadora/soma/:n1/:n2', (req,resp) => {
    let n1 = Number(req.params.n1)
    let n2 = Number(req.params.n2)
    let soma = n1 + n2;

    resp.send({
        entradas: {
            numero1: n1,
            numero2: n2
        },
        soma: soma
    })
})

servidor.get('/calcula/subtra/:n1/:n2', (req,resp) => {

    let n1 = Number(req.params.n1)
    let n2 = Number(req.params.n2)

    let subtracao = n1 - n2

    resp.send({
        entradas: {
            numero1: n1,
            numero2: n2
        },
        subtracao: subtracao
    })
})

servidor.get('/calcula/div/:n1/:n2', (req,resp) => {

    let n1 = Number(req.params.n1)
    let n2 = Number(req.params.n2)

    let div = n1 / n2

    resp.send({

        entradas: {
            numero1: n1,
            numero2: n2
        },
        subtracao: div
    })
})

servidor.post('/media', (req,resp) => {
    let n1 = req.body.nota1
    let n2 = req.body.nota2
    let n3 = req.body.nota3

    let media = (n1 + n2 + n3) / 3

    resp.send({
        media: media.toFixed(1)
    })
})

servidor.listen(
    5001,
     () => console.log('API SUBIU BOLADO NA PORTA 5001'))
