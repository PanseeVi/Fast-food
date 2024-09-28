import { useColorScheme } from '@mui/material';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';

export default function ModeSelect() {
  const { mode, setMode } = useColorScheme();
  const handleChange = (event) => {
    setMode(event.target.value);
  };
  return (
    <FormControl sx={{ minWidth: '120px' }}>
      <InputLabel id="select-theme-label"></InputLabel>
      <Select
        aria-labelledby="select-theme-label"
        value={mode}
        onChange={handleChange}
        name="radio-buttons-group"
        sx={{ color: 'primary.main' }}
      >
        <MenuItem value="light">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LightModeIcon /> Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeIcon /> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SettingsBrightnessIcon /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}
