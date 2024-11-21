const Servicecachorro = require("../services/Cachorro")
const servico = new Servicecachorro()

class ControllerCachorro
{
    
    async Mostrar(req,res)
    {
        try{
            const id = req.params.index
            
            const result = await servico.Mostrar()
            
            
            res.status(200).json(result);
        }catch(error)
        {
            res.status(500).json({message: "Erro ao pegar um cachorro"})
        }
    }



    async Adicionar(req,res)
    {
        try
        {
           const name = req.body.name
           const howold = req.body.howold
           const race = req.body.race
            
            
            const dog = await servico.Adicionar(name,howold,race)
            console.log("fé")
            res.status(201).json({message: `${JSON.stringify(dog)}Adicionado(a) com sucesso`, })

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
            const { name, howold, race} = req.body
            const cachorro = await servico.Alterar(id, name , howold, race)

            res.status(201).json({message:   cachorro})
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

module.exports = ControllerCachorro;