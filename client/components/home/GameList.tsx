import { Box, TableContainer, Grid, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import FlareIcon from '@mui/icons-material/Flare';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

const iconGenerate = function(genre: string) {
    if (genre === 'Fantasy') {
        return (<FlareIcon />)
    }
    if (genre === 'Action') { 
        return (<SportsKabaddiIcon />)
    }
    if (genre === 'Sports') {
        return (<SportsBasketballIcon />)
    }
}

export default function GameList(props: any) {

    return (
        <Box>
            <Grid>
                <TableContainer component={Paper}>
                    <Table sx={{ marginRight: '15%', marginLeft: '15%', maxWidth: '70%' }}>
                        <TableHead sx={{ backgroundColor: '#E6D9D9' }}>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell align='center'>Name</TableCell>
                                <TableCell align='center'>Genre</TableCell>
                                <TableCell align='center'>Max Players</TableCell>
                                <TableCell align='center'>Rating</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.games.map((value: any) => (
                            <TableRow key={value.name}>
                                <TableCell>{iconGenerate(value.genre)}</TableCell>
                                <TableCell align='center'>{value.name}</TableCell>
                                <TableCell align='center'>{value.genre}</TableCell>
                                <TableCell align='center'>{value.players}</TableCell>
                                <TableCell align='center'>{value.rating}</TableCell>
                            </TableRow>))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Box>
    )
}