import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)({
  '& .MuiBadge-badge': {
    right: -3,
    top: 3,
    borderColor: 'red',
    backgroundColor: 'red',
    color: 'white',
  },
});

export default function Cart() {
  return (
    <IconButton aria-label="cart" sx={{ color: 'primary.main' }}>
      <StyledBadge badgeContent={1}>
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
