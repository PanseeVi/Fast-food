import { Button } from '@mui/material';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Button href="/" variant="text" id="nav-news-btn">
        Home
      </Button>
    </Box>
  );
}
