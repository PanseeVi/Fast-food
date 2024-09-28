import _id from './_id';
import { Box } from '@mui/material';

export default function Products() {
  return (
    <Box
      p={2}
      sx={{ display: 'flex', width: '100%', justifyContent: 'center', gap: 2 }}
    >
      <_id />
    </Box>
  );
}
