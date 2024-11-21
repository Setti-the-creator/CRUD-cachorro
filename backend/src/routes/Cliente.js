const express = require('express')
const authentication = require("../middleware/auth")

const ControllerCliente = require("../controllers/Cliente")
const router = express.Router();
const controllers = new ControllerCliente();

router.post("/login", controllers.Adicionar)
router.post("/cadastro", controllers.Adicionar)

router.get("/",authentication, controllers.Mostrar)
router.put("/:id",authentication, controllers.Alterar)
router.delete("/:id",authentication, controllers.Deletar)
router.get("/session",authentication, controllers.GetSession)

module.exports = router