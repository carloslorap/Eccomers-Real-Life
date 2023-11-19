import axios from "axios";
import { base_url, config } from "../../utils/base_url";
const register = async (userData) => {
  const response = await axios.post(`${base_url}user/register`, userData);
  if (response.data) {
    if (response.data) {
      localStorage.setItem("customer", JSON.stringify(response.data));
    }
    return response.data;
  }
};

const login = async (loginData) => {
  const response = await axios.post(`${base_url}user/login`, loginData);
  if (response.data) {
    if (response.data) {
      localStorage.setItem("customer", JSON.stringify(response.data));
    }
    return response.data;
  }
};
const getUserWishlist = async () => {
  const response = await axios.get(`${base_url}user/wishlist`, config);
  if (response.data) {
    return response.data;
  }
};

const addToCart = async (cartData) => {
  const response = await axios.post(`${base_url}user/cart`, cartData, config);
  if (response.data) {
    if (response.data) {
      return response.data;
    }
  }
};
const getCart = async () => {
  const response = await axios.get(`${base_url}user/cart`, config);
  if (response.data) {
    if (response.data) {
      return response.data;
    }
  }
};
const removeProductCart = async (cartItemId) => {
  const response = await axios.delete(
    `${base_url}user/cart/delete-product-cart/${cartItemId}`,
    config
  );
  if (response.data) {
    return response.data;
  }
};

const updateProductCart = async (cartDetaiil) => {
  const response = await axios.delete(
    `${base_url}user/cart/update-product-cart/${cartDetaiil.cartItemId}/${cartDetaiil.newQuantity}`,
    config
  );
  if (response.data) {
    return response.data;
  }
};

const updateUser = async (data) => {
  const response = await axios.put(`${base_url}user/edit-user`, data, config);
  if (response.data) {
    return response.data;
  }
};

const forgotPassToken = async (data) => {
  const response = await axios.post(
    `${base_url}user/forgot-password-token`,
    data
  );
  if (response.data) {
    return response.data;
  }
};

const resetPass = async (data) => {
  const response = await axios.put(
    `${base_url}user/reset-password/${data.token}`,
    { password: data?.password }
  );
  if (response.data) {
    return response.data;
  }
};
export const authService = {
  register,
  login,
  getUserWishlist,
  addToCart,
  getCart,
  removeProductCart,
  updateProductCart,
  updateUser,
  forgotPassToken,
  resetPass,
};
