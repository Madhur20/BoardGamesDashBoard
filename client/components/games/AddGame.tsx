import React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Grid from '@mui/material/Grid';
import { TransitionProps } from '@mui/material/transitions';
import AddGameForm from './AddGameForm';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddGame() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab aria-label="add" onClick={handleClickOpen} sx={{ color: "#9C27B0" }}>
                <AddIcon />
            </Fab>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative', backgroundColor: '#2f2f2f' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ flex: 1, textAlign: 'center' }} variant="h6" component="div">
                            Add Game
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid sx={{ justifyContent: 'center', backgroundColor: '#E6D9D9', height: '100%', overflow: 'hidden' }}>
                    <AddGameForm setOpen={setOpen} />
                </Grid>
            </Dialog>
        </Box>
    )
}