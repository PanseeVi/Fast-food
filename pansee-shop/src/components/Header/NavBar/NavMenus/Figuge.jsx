import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Figuge() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box px={2}>
      <Button
        sx={{ color: 'primary.main' }}
        id="figuge-button"
        aria-controls={open ? 'figuge-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
      >
        Figuges
      </Button>
      <Menu
        id="figuge-menu"
        MenuListProps={{
          'aria-labelledby': 'figuge-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        sx={{ color: 'primary.main' }}
      >
        <MenuItem onClick={handleClose}>Amime Figuges</MenuItem>
        <MenuItem onClick={handleClose}>Gundam Figuges</MenuItem>
        <MenuItem onClick={handleClose}>Games Figuges</MenuItem>
      </Menu>
    </Box>
  );
}
