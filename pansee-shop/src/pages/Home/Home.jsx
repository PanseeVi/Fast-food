import { Box } from '@mui/material'
import Header from '../../components/Header/NavBar'
import Products from '../Products/Products'
import Banner from '~/components/Banner/Banner'
import Footer from '~/components/Footer/Footer'
export default function Home() {
  return (
    <Box>
      <Header />
      <Banner />
      <Products />
      <Footer />
    </Box>
  )
}
