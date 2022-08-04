import React, { useState } from "react";
import Grid from "@mui/material//Grid";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Box from "@mui/material/Box"
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const defaultValues = {
    name: "",
    genre: "",
    maxPlayers: 0,
    rating: 0,
};

export default function AddGameForm() {
    const [formValues, setFormValues] = useState(defaultValues);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target as HTMLInputElement;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleInputSelect = (event: SelectChangeEvent) => {
        const { name, value } = event.target as HTMLInputElement;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSliderChange = (name: string) => (event: Event, newValue: number | number[]) => {
        setFormValues({
            ...formValues,
            [name]: newValue,
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formValues);
        if (formValues.name.length > 0 && formValues.genre.length > 0) {
            setSuccess(true);
            handleClickSnack();
        } else {
            setSuccess(false);
            handleClickSnack();
        }
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

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <Grid container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Grid sx={{ margin: '2%' }}>
                        <TextField
                            id="name-input"
                            name="name"
                            label="Name"
                            type="text"
                            value={formValues.name}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid sx={{ margin: '2%' }}>
                        <TextField
                            id="max-players-input"
                            name="maxPlayers"
                            label="Max Players"
                            type="number"
                            value={formValues.maxPlayers}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid sx={{ margin: '2%' }}>
                        <FormControl>
                            <FormLabel id="genre">Genre</FormLabel>
                            <Select
                                aria-labelledby="genre"
                                name="genre"
                                value={formValues.genre}
                                onChange={handleInputSelect}
                            >
                                <MenuItem key="action" value="Action">
                                    Action
                                </MenuItem>
                                <MenuItem key="windows" value="Sports">
                                    Sports
                                </MenuItem>
                                <MenuItem key="fantasy" value="Fantasy">
                                    Fantasy
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid sx={{ margin: '2%' }}>
                        <div style={{ width: "350px" }}>
                            Rating
                            <Slider
                                value={formValues.rating}
                                onChange={handleSliderChange("rating")}
                                defaultValue={0}
                                step={1}
                                min={0}
                                max={100}
                                marks={[
                                    {
                                        value: 25,
                                        label: "25",
                                    },
                                    {
                                        value: 50,
                                        label: "50",
                                    },
                                    {
                                        value: 75,
                                        label: "75",
                                    },
                                ]}
                                valueLabelDisplay="on"
                            />
                        </div>
                    </Grid>
                    <Button variant="contained" color="primary" type="submit">
                        Add Game
                    </Button>
                    <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={snackbarClose}>
                        {success ?
                            <Alert onClose={snackbarClose} severity="success" sx={{ width: '100%' }}>
                                Game Inserted! Enjoy
                            </Alert>
                            : <Alert onClose={snackbarClose} severity="error" sx={{ width: '100%' }}>
                                Invalid Input :( Please Try again.
                            </Alert>}
                    </Snackbar>
                </Grid>
            </form>
        </Box>
    )
}