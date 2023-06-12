import axios from 'axios'

const authApi = axios.create({
    baseURL : 'http://localhost:8888'
})

const addToken = (token) => ({
    headers : {
        Authorization: `Bearer ${token}`
    }
})

export const register = (input) => {
    return authApi.post('/auth/register', input)
}

export const login = (input) => {
    return authApi.post('/auth/login', input)
}

export const getMe = (token) => {
    return authApi.get('/auth/getme', addToken(token))
}


export const getAllProducts = (token) => {
    return authApi.get('/product', addToken(token))
}

export const getProductById = ( id,token) => {
    return authApi.get(`/product/${id}`,addToken(token))
}

export const addProduct = (input, token) => {
    return authApi.post('/product', input, addToken(token))
}


export const updateProduct = (id,input,token) => {
    return authApi.put(`/product/${id}`,input,addToken(token))
}

export const deleteProduct = (id, token) => {
    return authApi.delete(`/product/${id}`, addToken(token))
}