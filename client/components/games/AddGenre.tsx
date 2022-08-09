import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AddGenre() {
    const [open, setOpen] = React.useState(false);
    const [genre, setGenre] = React.useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target as HTMLInputElement;
        setGenre(value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const handleClickSnack = () => {
        setSnackbarOpen(true);
    };

    const snackbarClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbarOpen(false);
    };

    const handleSubmit = () => {
        console.log(genre);
        if (genre.length > 0) {
            setSuccess(true);
            handleClickSnack();
        } else {
            setSuccess(false);
            handleClickSnack();
        }

        handleClose;
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Genre
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Genre</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Adding a new Genre for the Games
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="genre"
                        label="Genre"
                        fullWidth
                        variant="standard"
                        value={genre}
                        onChange={handleInputChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" onClick={handleSubmit}>Create</Button>
                </DialogActions>
                <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={snackbarClose}>
                    {success ?
                        <Alert onClose={snackbarClose} severity="success" sx={{ width: '100%' }}>
                            Genre Created
                        </Alert>
                        : <Alert onClose={snackbarClose} severity="error" sx={{ width: '100%' }}>
                            Invalid Input :( Please Try again.
                        </Alert>}
                </Snackbar>
            </Dialog>
        </div>
    );
}