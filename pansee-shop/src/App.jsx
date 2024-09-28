import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from '~/pages/Login/Login'
import Register from '~/pages/Register/Register'
import Cart from '~/pages/Cart/Cart'
import Admin from '~/pages/Admin/admin'
import { AuthProvider } from './apis/AuthContext'
function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='cart' element={<Cart />} />
            <Route path='/admin' element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
