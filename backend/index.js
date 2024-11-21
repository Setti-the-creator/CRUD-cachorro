const express = require("express")
const routerCachorro = require("./src/routes/Cachorro")
const routerCliente = require("./src/routes/Cliente")
const database = require('./src/config/database')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

app.use("/cachorro", routerCachorro)
app.use("/cliente",routerCliente)

//criar as rotas

const port = 3000

database.db
    .sync({ force: false })
    .then(( ) => {
        console.log("O banco conectado com sucesso")
        app.listen(port, () => {
            console.log( `Server rodando na porta ${port} ` )
        })
    })
    .catch((e) => {
        console.error(e)
    })
