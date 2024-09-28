import { Box } from '@mui/material'
import CartList from './CartList/CartList'
import HeaderBar from '~/components/Header/NavBar'
import ProMenu from '../Products/ProMenu/ProMenu'
export default function Cart() {
  return (
    <Box>
      <HeaderBar />
      <Box display='flex'>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <ProMenu />
        </Box>
        <Box>
          <CartList />
        </Box>
      </Box>
    </Box>
  )
}
