import {
  Container,
  Grid,
  Box,
  Card as MuiCard,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import {
  fetchDeleteProduct,
  fetchProductDetailsAPI,
  fetchUpdateProduct,
} from '~/apis'
import ModalEdit from '~/pages/Admin/Dasboard/ProductList/ModalAdd/ModalEdit'
import ModalAdd from '~/pages/Admin/Dasboard/ProductList/ModalAdd/ModalAdd'
import { formatVND } from '~/formatPrice'

export default function ProductList() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetchProductDetailsAPI().then((data) => {
      setData(data)
    })
  }, [])

  const deleteProduct = (product) => async () => {
    // const newProductList = [...data];
    // console.log(newProductList);
    await fetchDeleteProduct(product)
    fetchProductDetailsAPI().then((data) => {
      setData(data)
    })
  }

  // eslint-disable-next-line no-unused-vars
  const editProduct = (product) => async () => {
    await fetchUpdateProduct(product)
  }
  return (
    <Container>
      <Grid container spacing={2} mt={5}>
        <Box p={2}>
          <ModalAdd />
        </Box>
        {data.map((product, index) => (
          <Grid item xs={12} key={index}>
            <MuiCard
              sx={{
                width: '70vw',
                height: '200px',
                minWidth: '300px',
                boxSizing: 'border-box',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                }}
              >
                <CardActionArea
                  sx={{
                    width: '200px',
                    height: '200px',
                  }}
                >
                  <CardMedia
                    component='img'
                    width='200px'
                    height='200px'
                    image={product.imageUrl}
                    alt={product.name}
                  />
                </CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    {product.name}
                  </Typography>
                  <Typography gutterBottom variant='h10' component='div'>
                    {product.imageUrl}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {formatVND(product.price)}
                  </Typography>
                </CardContent>{' '}
                <Box
                  mx={5}
                  sx={{
                    justifyContent: 'end',
                    marginLeft: 'auto',
                  }}
                >
                  {/* Replace Button with Box for ModalEdit */}
                  <Box
                    sx={{
                      borderRadius: '5px',
                      textAlign: 'center',
                      color: 'black',
                    }}
                  >
                    <ModalEdit product={product} />
                  </Box>
                  {/* Update Delete button */}

                  <Box
                    onClick={deleteProduct(product)}
                    sx={{
                      textAlign: 'center',
                      color: 'black',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      marginTop: 10,
                    }}
                  >
                    <Typography
                      px={1}
                      py={1}
                      variant='contained'
                      sx={{ borderRadius: '5px' }}
                    >
                      Delete
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </MuiCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
