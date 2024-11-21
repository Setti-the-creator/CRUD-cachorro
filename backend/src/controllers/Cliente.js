const Servicecliente = require("../services/Cliente")
const servico = new Servicecliente()

class ControllerCliente
{
    async Mostrar(req,res)
    {
        try{
            const id = req.params.index
            
            const result = await servico.Mostrar()
            
            
            res.status(200).json(result);
        }catch(error)
        {
            res.status(500).json({message: "Erro ao pegar um Cliente"})
        }
    }
    async GetSession(req,res)
    {
        try{
            const id = req.session.id
            
            const result = await servico.MostrarById(id)
            
            
            res.status(200).json(result);
        }catch(error)
        {
            res.status(500).json({message: "Erro ao pegar um Cliente"})
        }
    }



    async Adicionar(req,res)
    {
        try
        {
           const nome = req.body.nome
           const telefone = req.body.telefone
         
            
            
            const cliente = await servico.Adicionar(nome,telefone)
            console.log("fé")
            res.status(201).json({message: `${JSON.stringify(cliente)}Adicionado(a) com sucesso`, })

        }catch(error)
        {
            res.status(500).json({message: "Erro ao adicionar"})
        }
    }

    async Alterar(req,res)
    {    
        try {
            const id = req.params.id
            console.log(req.params)
            const {nome, telefone} = req.body
            const client = await servico.Alterar(id, nome, telefone)

            res.status(201).json({message:   client})
        } catch (error) {
            console.log(error)
            res.status(500).json({message: "Erro ao Alterar"})
        }
    }


    async Deletar(req,res)
    {
        try {
            const id = req.params.id

            await servico.Deletar(id)
            res.status(204).send
        } catch (error) {
            res.status(500).json({message: "Erro ao deletar"})
        }
    }

}

module.exports = ControllerCliente;