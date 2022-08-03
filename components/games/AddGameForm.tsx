import React, { useState } from "react";
import Grid from "@mui/material//Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";

const defaultValues = {
    name: "",
    genre: "",
    maxPlayers: 0,
    rating: 0,
};

export default function AddGameForm() {
    const [formValues, setFormValues] = useState(defaultValues);

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSliderChange = (name: string) => (e: any, value: any) => {
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(formValues);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Grid>
                    <TextField
                        id="name-input"
                        name="name"
                        label="Name"
                        type="text"
                        value={formValues.name}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <FormControl>
                        <Select
                            name="genre"
                            value={formValues.genre}
                            onChange={handleInputChange}
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
                <Grid item>
                    <div style={{ width: "400px" }}>
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
                <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Grid>
        </form>
    )
}