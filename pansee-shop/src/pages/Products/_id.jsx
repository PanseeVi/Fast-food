import ProMenu from './ProMenu/ProMenu';
import ProBoard from './ProBoard/ProBoard';
import { Box } from '@mui/material';

export default function _id() {
  return (
    <Box
      p={2}
      sx={{ display: 'flex', width: '100%', justifyContent: 'center', gap: 2 }}
    >
      <ProMenu />
      <ProBoard />
    </Box>
  );
}
