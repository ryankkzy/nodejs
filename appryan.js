<<<<<<< HEAD
=======
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

servidor.listen(
    5001,
     () => console.log('API SUBIU BOLADO NA PORTA 5001'))
>>>>>>> 35a34a780ab61aa4234732bd69c79340030815bd
