import Box from '@mui/material/Box'
// import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
const drawerWidth = 200

export default function ClippedDrawer() {
  return (
    <Box
      sx={{
        width: drawerWidth,
        borderRight: '1px solid red',
      }}
    >
      <CssBaseline />

      <Box
        variant='permanent'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <List>
          {[
            'Hot Deals',
            'Best Sellers',
            'Family Combo',
            'Combo 99k',
            'Combo thả ga',
          ].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    </Box>
  )
}
