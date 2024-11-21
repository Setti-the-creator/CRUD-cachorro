import api from './api'

// user = {name:'', email:'', senha:''}
export const createUser = async (user) => {
    const response = await api.post('/cliente/login', user)
    
    return response.data
}
export const loginuser = async (email, senha) => {
const body = {email,senha}
const response = await api .post('/cliente/login', body)

    return response.data
}

export const signup = async (nome, email, senha) => {
    const body = {nome, email, senha}
    const response = await api.post('/cliente/cadastro',body)

    return response.data
}