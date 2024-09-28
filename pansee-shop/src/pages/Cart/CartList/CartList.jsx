// import { Box } from '@mui/material';
// import CartItem from './CartItem/CartItem';
// export default function CartList() {
//   return (
//     <Box>
//       <Box>
//         <CartItem />
//       </Box>
//     </Box>
//   );
// }
import { useState, useMemo, useCallback, useEffect } from 'react';
import {
  Box,
  Grid,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import CartItem from './CartItem/CartItem';

const CartList = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const updateQuantity = useCallback((id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
      )
    );
  }, []);

  const handleQuantityChange = useCallback(
    (id, event) => {
      const newQuantity = parseInt(event.target.value, 10) || 0;
      updateQuantity(id, newQuantity);
    },
    [updateQuantity]
  );

  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  return (
    <Box sx={{ mx: isMobile ? 2 : 8 }}>
      <Grid container spacing={2}>
        {cartItems.map((item) => (
          <Grid item xs={12} key={item.id}>
            <CartItem
              item={item}
              isMobile={isMobile}
              updateQuantity={updateQuantity}
              handleQuantityChange={handleQuantityChange}
            />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          mt: 2,
          textAlign: 'right',
          mx: isMobile ? 2 : 8,
        }}
      >
        <Typography variant="h5">Total: ${totalPrice.toFixed(2)}</Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 1, width: isMobile ? '100%' : 'auto' }}
        >
          Proceed to Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default CartList;
