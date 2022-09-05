import * as React from 'react';
import { useRouter } from 'next/router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Modal } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { GlobalContext } from '../pages/_app';

export default function ButtonAppBarLogout(props: any) {
    const router = useRouter();
    const [open, setOpen] = React.useState(false);
    const { userName } = React.useContext(GlobalContext);
    const [user, setUser] = React.useState(null);

    React.useEffect(() => setUser(JSON.parse(userName)), [])

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
      };

    const onLogout = () => {
        if (typeof window !== "undefined") {
            localStorage.removeItem("username");
        }
        router.push("/");
    }

    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <Box sx={{ padding: 5, flex: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#262626", padding: 1 }}>
        <Toolbar>
          {user !== undefined ? 
            <Grid>
              <AccountCircleIcon fontSize='large' />
              <Typography variant='h4' sx={{ marginLeft: '1%' }} component="a" href='/home'>{user}</Typography>
            </Grid>
          : "" }
          <Typography variant="h2" sx={{ flexGrow: 1, color: 'white', textAlign: 'center', fontFamily: "cursive" }}>
            Games Dashboard
          </Typography>
          <Button variant='contained' color='info' onClick={handleOpen}>Logout</Button>
          <Modal
            hideBackdrop
            open={open}
            onClose={handleClose}
            >
                <Box sx={{ ...style, width: 300 }}>
                    <h2 style={{ color: 'black' }}>Confirm Logout ?</h2>
                    <Button sx={{ marginLeft: '3%' }} onClick={handleClose} variant='contained' color='info'>Cancel</Button>
                    <Button variant='contained' color='error' sx={{ marginLeft: '10%' }} onClick={onLogout}>Logout</Button>
                </Box>
          </Modal>
        </Toolbar>
      </AppBar>
    </Box>
  );
}