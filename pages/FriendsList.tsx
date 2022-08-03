    import * as React from 'react';
    import { styled } from '@mui/material/styles';
    import Box from '@mui/material/Box';
    import List from '@mui/material/List';
    import ListItem from '@mui/material/ListItem';
    import ListItemAvatar from '@mui/material/ListItemAvatar';
    import ListItemIcon from '@mui/material/ListItemIcon';
    import ListItemText from '@mui/material/ListItemText';
    import Avatar from '@mui/material/Avatar';
    import IconButton from '@mui/material/IconButton';
    import FormGroup from '@mui/material/FormGroup';
    import FormControlLabel from '@mui/material/FormControlLabel';
    import Checkbox from '@mui/material/Checkbox';
    import Grid from '@mui/material/Grid';
    import Typography from '@mui/material/Typography';
    import FolderIcon from '@mui/icons-material/Folder';
    import DeleteIcon from '@mui/icons-material/Delete';
    import CenteredTabs from '../components/MenuBar';

    const names = [
        "Josh",
        "Adam",
        "Sam",
        "Michael"
    ];

    function generate(element: React.ReactElement) {
        return names.map((value) =>
            <ListItem key={value}
            secondaryAction={
            <IconButton edge="end" aria-label="delete">
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
        <Box sx={{bgcolor:'#2f2f2f', p:8 }}>
        {/* <Grid container sx={{p:10, bgcolor:'yellow', alignContent: 'center'}}> */}
            <Grid item xs sx={{mx:"auto"}} >
            <Typography sx={{ textAlign: 'center', fontFamily: 'Georgia', bgcolor:'#E6D9D9', color:'black', p:1 }} variant="h5" component="div">
                My Friend List
            </Typography>
            <Demo sx={{bgcolor:'#E6D9D9', alignItem:'center', color:'black'}}>
                {/* <List dense={dense}> */}
                {generate(<ListItem></ListItem>)}
                {/* </List> */}
            </Demo>
            </Grid>
        {/* </Grid> */}
        </Box>
    );
    }
