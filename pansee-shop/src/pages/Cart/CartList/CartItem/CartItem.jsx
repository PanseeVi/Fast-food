import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  TextField,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartItem = ({ item, isMobile, updateQuantity, handleQuantityChange }) => {
  return (
    <Card sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
      <CardMedia
        component="img"
        image={item.imageUrl}
        alt={item.name}
        sx={{
          width: isMobile ? '100%' : '200px',
          height: isMobile ? '200px' : '100%',
          objectFit: 'cover',
        }}
      />
      <CardContent
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: isMobile ? 'center' : 'flex-start',
          gap: 2,
        }}
      >
        <Box>
          <Typography variant={isMobile ? 'h6' : 'h5'}>{item.name}</Typography>
          <Typography variant="body2">{item.description}</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
            mx: isMobile ? 0 : 8,
          }}
        >
          <Typography variant={isMobile ? 'h6' : 'h5'}>
            ${item.price.toFixed(2)}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity === 0}
            >
              <RemoveIcon />
            </IconButton>
            <TextField
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, e)}
              type="number"
              InputProps={{
                inputProps: { min: 0, style: { textAlign: 'center' } },
              }}
              sx={{ width: '60px' }}
            />
            <IconButton
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              <AddIcon />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  isMobile: PropTypes.bool.isRequired,
  updateQuantity: PropTypes.func.isRequired,
  handleQuantityChange: PropTypes.func.isRequired,
};

export default CartItem;
