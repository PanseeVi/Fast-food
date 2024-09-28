import React from 'react'
import { Box, Container, Grid, Link, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        padding: '20px 0',
      }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant='h6' gutterBottom>
              Company
            </Typography>
            <Link href='#' color='inherit' underline='none'>
              About Us
            </Link>
            <br />
            <Link href='#' color='inherit' underline='none'>
              Careers
            </Link>
            <br />
            <Link href='#' color='inherit' underline='none'>
              Contact Us
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant='h6' gutterBottom>
              Resources
            </Typography>
            <Link href='#' color='inherit' underline='none'>
              Blog
            </Link>
            <br />
            <Link href='#' color='inherit' underline='none'>
              Help Center
            </Link>
            <br />
            <Link href='#' color='inherit' underline='none'>
              Privacy Policy
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant='h6' gutterBottom>
              Follow Us
            </Typography>
            <Link href='#' color='inherit' underline='none'>
              Facebook
            </Link>
            <br />
            <Link href='#' color='inherit' underline='none'>
              Twitter
            </Link>
            <br />
            <Link href='#' color='inherit' underline='none'>
              Instagram
            </Link>
          </Grid>
        </Grid>
        <Box textAlign='center' mt={5}>
          <Typography variant='body2'>
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
