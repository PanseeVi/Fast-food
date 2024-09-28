import { Box, Typography, Paper, TextField, Button } from '@mui/material'
import Link from '@mui/material/Link'
import CardMedia from '@mui/material/CardMedia'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import GithubIcon from '@mui/icons-material/GitHub'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchRegisterAPI } from '~/apis/index'
import { Phone } from '@mui/icons-material'

export default function Register() {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match!')
      return
    }

    try {
      const data = { email, password, phone }
      const response = await fetchRegisterAPI(data)
      console.log(response)
      if (response.success) {
        console.log('okma')

        alert('Registration successful!')

        navigate('/login')
      } else {
        setError(response.message || 'Registration failed')
      }
    } catch (error) {
      setError(`An error occurred during registration ${error}`)
    }
  }

  return (
    <CardMedia
      image='https://img.freepik.com/premium-photo/cooker-delicious-juicy-hamburgers-with-meat-cutlet-vegetables-table-neural-network-ai-generated_76080-94884.jpg?w=1060'
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
            maxHeight: '600px',
            height: '600px',
            margin: 'auto',
            padding: '20px',
            fontSize: '20px',
            borderRadius: '10px',
          }}
        >
          <Box textAlign='center' my={3}>
            <Typography variant='h4'>Register</Typography>
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
                label='phone'
                type='number'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                sx={{ width: '100%' }}
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
            <Box pt={2} gap={1}>
              <TextField
                label='Re-Password'
                type='password'
                value={confirmPassword}
                sx={{ width: '100%' }}
                onChange={(e) => {
                  setConfirmPassword(e.target.value)
                }}
              />
            </Box>
            {error && (
              <Typography color='error' textAlign='center' mt={2}>
                {error}
              </Typography>
            )}
            <Box mt={2}>
              <Button type='submit' variant='contained' sx={{ width: '100%' }}>
                Register
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
            Already have an account?{' '}
            <Link href='/login' underline='hover'>
              Login now!
            </Link>
          </Typography>
        </Paper>
      </Box>
    </CardMedia>
  )
}
