const express = require('express')
const authentication = require("../middleware/auth")
// const ControllerCliente = require("../controllers/Cliente")
const ControllerCachorro = require("../controllers/Cachorro")
const router = express.Router();
const controllers = new ControllerCachorro();


router.post("/", controllers.Adicionar)

router.get("/",authentication, controllers.Mostrar)
router.put("/:id",authentication, controllers.Alterar)
router.delete("/:id",authentication, controllers.Deletar)
                    
// get PegarTodos / get PegarUm / post Adicionar / put Alterar / delete Deletar
module.exports = router

