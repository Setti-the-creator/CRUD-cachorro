const express = require('express')

const Controllerapi = require("../controllers/api")
const router = express.Router();
const controllers = new Controllerapi();

router.get("/api/Dogs/", controllers.Mostrar)
router.post("/api/Dogs", controllers.Adicionar)
router.put("/api/Dogs/:id", controllers.Alterar)
router.delete("/api/Dogs/:id", controllers.Deletar)




// get PegarTodos / get PegarUm / post Adicionar / put Alterar / delete Deletar
module.exports = router

