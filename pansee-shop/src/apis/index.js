import axios from 'axios'
import { API_ROOT } from '../utils/constants'
// import { useAuth } from '~/apis/AuthContext';

export const fetchProductDetailsAPI = async () => {
  const response = await axios.get(`${API_ROOT}/product/`)
  return response.data
}

export const fetchRegisterAPI = async (data) => {
  try {
    const response = await axios.post(`${API_ROOT}/auth/register`, data)
    console.log(response)
    return response.data
  } catch (error) {
    console.log(error.response?.data || error.message)
    throw error
  }
}

export const fetchLoginAPI = async (data) => {
  try {
    const response = await axios.post(`${API_ROOT}/auth/login`, data)
    return response.data
  } catch (error) {
    console.log(error.response?.data || error.message)
    throw error
  }
}

export const fetchAddProduct = async (data) => {
  try {
    const response = await axios.post(`${API_ROOT}/product`, data)
    return response
  } catch (error) {
    console.log(error.response?.data || error.message)
    throw error
  }
}

export const fetchDeleteProduct = async (data) => {
  try {
    console.log(data)
    const id = data._id
    const response = await axios.delete(`${API_ROOT}/product/${id}`, data)
    return response
  } catch (error) {
    console.log(error.response?.data || error.message)
    throw error
  }
}

export const fetchUpdateProduct = async (data) => {
  try {
    const { _id, ...dataWithoutId } = data
    const response = await axios.put(
      `${API_ROOT}/product/${_id}`,
      dataWithoutId
    )
    return response
  } catch (error) {
    console.log(error.response?.data || error.message)
    throw error
  }
}

export const fetchUserListAPI = async () => {
  try {
    const response = await axios.get(`${API_ROOT}/user/`)
    return response.data
  } catch (error) {
    if (error.response) {
      console.error('Server error:', error.response.status, error.response.data)
    } else if (error.request) {
      console.error('No response received:', error.request)
    } else {
      console.error('Request error:', error.message)
    }
    throw new Error('Failed to fetch user list')
  }
}

export const fetchUpdateUserAPI = async (data) => {
  try {
    const { _id, ...dataWithoutId } = data
    const response = await axios.put(`${API_ROOT}/user/${_id}`, dataWithoutId)
    return response
  } catch (error) {
    console.log(error.response?.data || error.message)
    throw error
  }
}

export const fetchDeleteUserAPI = async (data) => {
  try {
    const id = data._id
    const response = await axios.delete(`${API_ROOT}/user/${id}`, data)
    return response
  } catch (error) {
    console.log(error.response?.data || error.message)
    throw error
  }
}

export const addToCartAPI = async (data) => {
  console.log(data.userID)
  try {
    const response = await axios.put(`${API_ROOT}/cart/${data.userId}`, data)
    return response
  } catch (error) {
    console.log(error.response?.data || error.message)
    throw error
  }
}

export const getCartData = async (data) => {
  try {
    const response = await axios.get(`${API_ROOT}/cart/${data.userID}`)
    return response
  } catch (error) {
    console.log(error.response?.data || error.message)
  }
}
