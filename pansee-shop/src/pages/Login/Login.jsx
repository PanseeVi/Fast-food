import { Box, Typography, Paper, TextField, Button } from '@mui/material'
import Link from '@mui/material/Link'

import CardMedia from '@mui/material/CardMedia'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import GithubIcon from '@mui/icons-material/GitHub'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchLoginAPI } from '~/apis/index' // Adjusted for login API
import { setToken } from '~/apis/authService'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      const response = await fetchLoginAPI({ email, password })

      console.log('API Response:', response)

      if (response && response.message === 'Login successful') {
        alert('Login successful!')
        localStorage.setItem('userData', response.user._id)
        if (response.token) {
          setToken(response.token)
          console.log('Stored token:', localStorage.getItem('token'))
        } else {
          console.error('Token is missing from the response')
        }
        navigate('/')
        window.location.reload()
      } else {
        setError(
          response && response.message ? response.message : 'Login failed'
        )
      }
    } catch (error) {
      console.error('Login error:', error)
      setError(`An error occurred during login: ${error.message || error}`)
    }
  }

  return (
    <CardMedia
      image='https://img.freepik.com/free-photo/skillful-asian-chef-prepares-meals-lively-street-stall_157027-4167.jpg?w=1380&t=st=1727460657~exp=1727461257~hmac=fa6b18cdfa351dba76f48ac952ba1ea6dbc9b55a53f1c7b59f90dafa84de017e'
      sx={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        height='100vh'
        sx={{}}
      >
        <Paper
          sx={{
            width: '400px',
            maxWidth: '400px',
            maxHeight: '500px',
            height: '500px',
            margin: 'auto',
            padding: '20px',
            fontSize: '20px',
            borderRadius: '10px',
          }}
        >
          <Box textAlign='center' my={3}>
            <Typography variant='h4'>Login</Typography>
          </Box>
          <Box component='form' onSubmit={handleSubmit}>
            <Box>
              <TextField
                sx={{ width: '100%' }}
                label='Email'
                type='email'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </Box>
            <Box pt={2} gap={1}>
              <TextField
                label='Password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ width: '100%' }}
              />
            </Box>
            {error && (
              <Typography color='error' textAlign='center' mt={2}>
                {error}
              </Typography>
            )}
            <Box mt={2}>
              <Button type='submit' variant='contained' sx={{ width: '100%' }}>
                Login
              </Button>
            </Box>
          </Box>
          <Typography textAlign='center'>or</Typography>
          <Box mt={2} display='flex' justifyContent='center' gap={2}>
            <Link href='/login/google'>
              <GoogleIcon sx={{ color: 'red !important' }} />
            </Link>
            <Link href='/login/facebook'>
              <FacebookIcon sx={{ color: 'blue !important' }} />
            </Link>
            <Link href='/login/github'>
              <GithubIcon sx={{ color: 'black !important' }} />
            </Link>
          </Box>
          <Typography textAlign='center' mt={2}>
            Don not have an account?{' '}
            <Link href='/register' underline='hover'>
              Register now!
            </Link>
          </Typography>
        </Paper>
      </Box>
    </CardMedia>
  )
}
