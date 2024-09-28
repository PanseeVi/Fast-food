'use client'
import ModeSelect from '~/components/ModeSelect'
import { Box, Link, Typography, Button } from '@mui/material'
import StorefrontIcon from '@mui/icons-material/Storefront'
import Figuge from './NavMenus/Figuge'
import Home from './NavMenus/Home'
import News from './NavMenus/News'
import Contact from './NavMenus/Contact'
import SearchBar from './NavMenus/SearchBar'
import Cart from './NavMenus/Cart'
import Profiles from './NavMenus/Profiles'
import { useAuth } from '~/apis/AuthContext' // Thêm import này

export default function NavBar() {
  const { isLoggedIn } = useAuth() // Sử dụng hook useAuth

  return (
    <Box
      px={2}
      py={1}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <Button
        href='/'
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: 'primary.main',
          fontSize: '1.5rem',
          gap: 1,
        }}
      >
        <StorefrontIcon sx={{ fontSize: '2rem' }} />
        <Typography variant='span'>FastShop</Typography>
      </Button>
      <SearchBar />

      <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}></Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <ModeSelect />
        </Box>

        <Link href='/cart'>
          <Cart />
        </Link>

        {isLoggedIn ? (
          <Profiles />
        ) : (
          <Button href='/login' variant='outlined'>
            Login
          </Button>
        )}
      </Box>
    </Box>
  )
}
