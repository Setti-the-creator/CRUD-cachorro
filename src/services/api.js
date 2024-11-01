const database = require('../config/database')
const modelExercicio = require('../models/api')

// const model = new modelExercicio()
class Serviceapi 
{
    
    async Mostrar()
     {
     return modelExercicio.findAll()
     }
    async Adicionar(name,howold,race)
    {
        if(!name || !race || !howold)
        {
            throw new Error("Favor preencher todos os dados obrigatórios.")
        }
    return modelExercicio.create({name, howold, race})
    }

    async Alterar(id, name, howold, race)
    {
        console.log(id)
        if(!id)
        {
            throw new Error("Favor informar dado necessário (id)")
        }
        const dog = await modelExercicio.findByPk(id)
        if(!dog)
            {
                throw new Error("Cachorro nao encontrado")
            }
        dog.name = name  || dog.name
        dog.howold = howold  || dog.howold
        dog.race = race  || dog.race

        dog.save()
        return dog
    }
    async Deletar(id)
    {
    const dog = await modelExercicio.findByPk(id)
    if(!dog)
    {
        throw new Error("Cachorro nao encontrado")
    }
    return dog.destroy()
    }
    
}

module.exports = Serviceapi;