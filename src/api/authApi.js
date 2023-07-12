import axios from "axios";

const authApi = axios.create({
  baseURL: "http://localhost:8888",
});

const addToken = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const register = (input) => {
  return authApi.post("/auth/register", input);
};

export const login = (input) => {
  return authApi.post("/auth/login", input);
};

export const getMe = (token) => {
  return authApi.get("/auth/getme", addToken(token));
};

export const getAllProducts = (token) => {
  return authApi.get("/product/getproduct", addToken(token));
};

export const getProductById = (id, token) => {
  return authApi.get(`/product/${id}`, addToken(token));
};

export const addProduct = (input, token) => {
  return authApi.post("/product/addproduct", input, addToken(token));
};

export const updateProduct = (id, input, token) => {
  return authApi.put(`/product/${id}`, input, addToken(token));
};

export const deleteProduct = (id, token) => {
  return authApi.delete(`/product/${id}`, addToken(token));
};

export const addCart = (input, token) => {
  return authApi.post("/cart/addCart", input, addToken(token));
};

export const getCartByUserId = (id, token) => {
  return authApi.get(`/cart/${id}`, addToken(token));
};
export const getCart = (token) => {
    return authApi.get(`/cart/getcart`, addToken(token));
  };
  
  export const addImage = (id,input, token) => {
    return authApi.post(`/product/image/${id}`, input, addToken(token));
  };