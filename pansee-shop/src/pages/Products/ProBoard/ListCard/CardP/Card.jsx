import {
  Container,
  Grid,
  Box,
  Card as MuiCard,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Divider,
  Button,
  Input,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { addToCartAPI, fetchProductDetailsAPI } from '~/apis'
import { formatVND } from '~/formatPrice'

// import Data from '~/apis/mock-data';

export default function Card() {
  const [data, setData] = useState([])
  const [listProduct, setListProduct] = useState([])
  useEffect(() => {
    fetchProductDetailsAPI().then((data) => {
      setData(data)
    })
  }, [])
  const userId = localStorage.getItem('userData')

  const addToCart = async () => {
    const cartData = { userId, items: listProduct }
    addToCartAPI(cartData)
  }

  return (
    <Container>
      <Grid container spacing={2}>
        {data.map((product, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <MuiCard
              sx={{
                width: '350px',
                height: '500px',
                minWidth: '300px',
                boxSizing: 'border-box',
                position: 'relative',
              }}
            >
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='300px'
                  image={product.imageUrl}
                  alt={product.name}
                />
              </CardActionArea>
              <CardContent height='150px'>
                <Typography gutterBottom variant='h5' component='div'>
                  {product.name}
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{ textAlign: 'right', color: 'red' }}
                >
                  {formatVND(product.price)}
                </Typography>
              </CardContent>
              <Divider />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  height: '50px',
                }}
              >
                <Button
                  sx={{
                    width: '90%',
                    margin: '10px 0',
                    height: '50px',
                    position: 'absolute',
                    bottom: '0px',
                  }}
                  type='submit'
                  value={product._id}
                  variant='contained'
                  color='primary'
                  onClick={async (e) => {
                    // console.log(e.target.value)
                    await setListProduct(e.target.value)
                    addToCart()
                  }}
                >
                  ADD TO CART
                </Button>
              </Box>
            </MuiCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
