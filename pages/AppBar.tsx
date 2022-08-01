import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import styles from '../styles/Home.module.css'

export default function ButtonAppBar() {
  return (
    <Box className={styles.container} sx={{ padding: 5, flex: 1 }}>
      <AppBar position="fixed" sx={{backgroundColor: "#262626", padding: 1}}>
        <Toolbar>
          <Typography variant="h2" component="div" sx={{ flexGrow: 1, color: 'white', textAlign: 'center', fontFamily: "cursive"}}>
            Board Games Dashboard
          </Typography>
          <Button variant="outlined" disableElevation color="primary" size='large'>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
