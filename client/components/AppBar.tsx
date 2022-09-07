import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function ButtonAppBar() {
  return (
    <Box sx={{ padding: 5, flex: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#262626", padding: 1 }}>
        <Toolbar>
          <Typography variant="h2" component="div" sx={{ flexGrow: 1, color: 'white', textAlign: 'center', fontFamily: "cursive" }}>
            Games Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
