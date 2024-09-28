import { Box } from '@mui/material';
import NavBar from './NavBar/NavMenus';
import SearchBar from './NavBar/NavMenus/SearchBar';
export default function HeaderBar() {
  return (
    <Box>
      <Box>
        <NavBar />
      </Box>
      <hr />
      <Box
        my={2}
        sx={{
          display: { xs: 'flex', sm: 'none' },
          justifyContent: 'center',
          minWidth: '100%',
        }}
      >
        <SearchBar />
      </Box>
    </Box>
  );
}
