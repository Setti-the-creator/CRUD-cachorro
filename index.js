const express = require("express")
const router = require("./src/routes/api")
const database = require('./src/config/database')
const app = express()

app.use(express.json())

app.use(router)

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
