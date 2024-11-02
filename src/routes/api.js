const express = require('express')
const authentication = require("../middleware/auth")

const Controllerapi = require("../controllers/api")
const router = express.Router();
const controllers = new Controllerapi();

router.post("/api/Dogs", controllers.Adicionar)

router.get("/api/Dogs/",authentication, controllers.Mostrar)
router.put("/api/Dogs/:id",authentication, controllers.Alterar)
router.delete("/api/Dogs/:id",authentication, controllers.Deletar)




// get PegarTodos / get PegarUm / post Adicionar / put Alterar / delete Deletar
module.exports = router

