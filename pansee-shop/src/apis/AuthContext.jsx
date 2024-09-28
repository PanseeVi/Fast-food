import { createContext, useContext, useState, useEffect } from 'react'
import { getToken, removeToken } from '../apis/authService'
import PropTypes from 'prop-types'

const AuthContext = createContext({
  isLoggedIn: false,
  user: null,
  admin: false,
  login: () => {},
  logout: () => {},
})

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [admin, setAdmin] = useState(false)
  useEffect(() => {
    checkLoginStatus()
  }, [])

  const checkLoginStatus = () => {
    const token = getToken()
    if (token) {
      setIsLoggedIn(true)
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        const userData = JSON.parse(storedUser)
        setUser(userData)
        setAdmin(userData.isAdmin || false)
      }
    }
  }

  const login = (token, userData) => {
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(userData))
    setIsLoggedIn(true)

    setUser(userData)
    setAdmin(userData.isAdmin || false)
  }

  const logout = () => {
    removeToken()
    localStorage.removeItem('user')
    setIsLoggedIn(false)
    setUser(null)
    setAdmin(false)
  }

  const value = {
    isLoggedIn,
    user,
    admin,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useAuth = () => useContext(AuthContext)
