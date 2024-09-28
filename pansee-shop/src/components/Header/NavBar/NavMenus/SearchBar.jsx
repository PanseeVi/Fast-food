import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

export default function PrimarySearchAppBar() {
  return (
    <Box
      px={2}
      sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%' }}
    >
      <SearchIcon sx={{ color: 'primary.main' }} />
      <TextField
        id="outlined-search"
        label="Search..."
        type="search"
        sx={{ width: '100%', minWidth: '120px' }}
      />
    </Box>
  );
}
