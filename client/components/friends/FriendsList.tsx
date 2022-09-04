import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

function deleteGame(friendid: string) {
    const id = {
        userName: localStorage.getItem("username"),
        friend: friendid,
    }
    const nid = id.userName + "+" + id.friend;
    // console.log(id);
    axios.delete("http://localhost:8080/deleteFriend/"+nid);
      // console.log("Game deleted");
  }

function generate(element: React.ReactElement) {
    
    const [names, setNames] = React.useState([]);

    // console.log(names);

    React.useEffect(() => {
        try {
            const user = localStorage.getItem("username");
            fetch("http://localhost:8080/putFriend"+user).then(res => res.json())
            .then(jsonRes => {
                setNames(jsonRes); 
                // console.log(jsonRes);
            })
        } catch (error) {
            console.log(error);
        }
    });

    return names.map((value) => 
        <ListItem key={value}
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => deleteGame(value)}>
                    <h6>Remove Friend</h6>
                    <DeleteIcon />
                </IconButton>
            }>
            <ListItemAvatar>
                <Avatar></Avatar>
            </ListItemAvatar>
            <ListItemText>{value}</ListItemText>
        </ListItem>
    );
}


const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList() {    

    return (
        <Box sx={{ bgcolor: '#2f2f2f', p: 8 }}>
            <Grid item xs sx={{ mx: "auto" }} >
                <Typography sx={{ textAlign: 'center', fontFamily: 'Georgia', bgcolor: '#E6D9D9', color: 'black', p: 1 }} variant="h5" component="div">
                    Friends
                </Typography>
                <Demo sx={{ bgcolor: '#E6D9D9', alignItem: 'center', color: 'black' }}>
                    {generate(<ListItem></ListItem>)}
                </Demo>
            </Grid>
        </Box>
    );
}
