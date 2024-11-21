const database = require('../config/database')
const bcrypt = require("bcrypt")
const ModelCliente = require('../models/Cliente')
const salt = 12;
// const model = new modelExercicio()
class Servicecliente
{
    async GetPessoaById(id)
    {
        return ModelCliente.findByPk(id)
    }
    async Mostrar()
     {
     return ModelCliente.findAll()
     }
    async Adicionar(nome, telefone)
    {
        if(!nome || !telefone)
        {
            throw new Error("Favor preencher todos os dados obrigatórios.")
        }
        const hashSenha = await bcrypt.hash( nome,salt)
    return ModelCliente.create({nome: hashSenha, telefone})
    }

    async Alterar(id, nome, telefone)
    {
        console.log(id)
        if(!id)
        {
            throw new Error("Favor informar dado necessário (id)")
        }
        const cliente = await ModelCliente.findByPk(id)
        if(!cliente)
            {
                throw new Error("Cliente nao encontrado")
            }
        cliente.nome = nome 
        ? await bcrypt.hash( nome,salt)
         : cliente.nome
        cliente.telefone = telefone
        ? telefone
        :cliente.telefone
        

        cliente.save()
        return cliente
    }
    async Deletar(id)
    {
    const cliente = await ModelCliente.findByPk(id)
    if(!cliente)
    {
        throw new Error("Cliente nao encontrado")
    }
    return cliente.destroy()
    }
    
}

module.exports = Servicecliente;