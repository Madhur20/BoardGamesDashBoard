import React, { useState, useContext } from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { GlobalContext } from '../pages/_app';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { FormLabel, Grid, TextField } from '@mui/material';
import { purple } from '@mui/material/colors';
// const fetch = require('node-fetch');
import axios from 'axios';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
}));

function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

async function foo(user: any) {
    const res = await fetch("http://localhost:8080/putFriend" + user);
    const friendsList: string[] | [] = await res.json();
    return friendsList;
}

const defaultValues = {
    friends: [],
    genre: "",
    players: 0,
}

const genres = [
    'Action',
    'Fantasy',
    'Sports',
];

export default function HomePage() {
    const theme = useTheme(); 
    const [personName, setPersonName] = React.useState<string[]>([]);
    const [friends, setFriends] = useState([]);
    const { userName } = useContext(GlobalContext);

    const [formValues, setFormValues] = useState(defaultValues);

    React.useEffect(() => {
        foo(userName).then((res) => setFriends(res));
    }, [])

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
      const { target: { value } } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };

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

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const submitted = {
            friend: personName,
            genre: formValues.genre,
            players: formValues.players,
        }

        if (submitted.friend.length > 0 && submitted.genre.length > 0 && submitted.players > 0) {
            // submitted IS AN OBJECT THAT CONTAINS ALL THE DATA YOU NEED FOR FILTERING
            console.log(submitted);
            // DO SUMBIT STUFF HERE
            let friends = "";
            for (let i = 0; i < submitted.friend.length; i++) {
                (i === submitted.friend.length-1) ? friends+=submitted.friend[i] : friends=friends+submitted.friend[i]+",";
            }
            const findgames_url = `http://localhost:8080/findgames?friends=${encodeURIComponent(friends)}&players=${encodeURIComponent(submitted.players)}&genre=${encodeURIComponent(submitted.genre)}`;
            // console.log(findgames_url);
            await fetch(findgames_url)
            .then((response: { json: () => any; }) => response.json())
            
            setFormValues(defaultValues);
            setPersonName([]);
        } else {
            alert("Please Select Correct Parameters: \n\n Friends > 0 \n Players > 0 \n Genre");   
        }
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <Grid>
                <FormControl>
                    <FormLabel id="select-friends" color="secondary" sx={{ color: "#e3e3e3" }}>Friends</FormLabel>
                    <Select
                    sx={{ bgcolor: "#e3e3e3", width: 300 }}
                    id="select-friends"
                    multiple
                    color="secondary"
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-friends" label="Chip" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, }}>
                        {selected.map((value) => (
                            <Chip key={value} label={value} />
                        ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                    >
                    {friends.map((name) => (
                        <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                        >
                        {name}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid sx={{ marginTop: 10 }}>
            <FormControl>
                    <FormLabel id="players" color="secondary" sx={{ color: "#e3e3e3" }}>Max Players</FormLabel>
                    <TextField
                        sx={{ bgcolor: "#e3e3e3", color: "#e3e3e3" }}
                        id="players"
                        name="players"
                        type="number"
                        color="secondary"
                        value={formValues.players}
                        onChange={handleInputChange}
                    />
            </FormControl>
            </Grid>
            <Grid sx={{ marginTop: 10 }}>
                <FormControl>
                <FormLabel id="genre" color="secondary" sx={{ color: "#e3e3e3" }}>Genre</FormLabel>
                    <Select
                    aria-labelledby="genre"
                    name="genre"
                    value={formValues.genre}
                    onChange={handleInputSelect}
                    color="secondary"
                    sx={{ bgcolor: "#e3e3e3", width: 200 }}
                    >
                        {genres.map((name) => (
                            <MenuItem
                            key={name}
                            value={name}
                            >
                            {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <ColorButton variant="contained" size='large' sx={{ padding: 2, marginTop: 10 }} type="submit">FIND GAMES!</ColorButton>
        </form>
    )
}