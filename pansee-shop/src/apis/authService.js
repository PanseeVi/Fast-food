// Lưu token vào localStorage
export const setToken = (token) => {
  if (token && typeof token === 'string') {
    localStorage.setItem('token', token)
    console.log('Token successfully set in localStorage:', token)
  } else {
    console.error('Invalid token:', token)
  }
}

// Lấy token từ localStorage
export const getToken = () => {
  return localStorage.getItem('token')
}
export const userId = localStorage.getItem('userData')

// Xóa token khỏi localStorage
export const removeToken = () => {
  localStorage.removeItem('token')
}
