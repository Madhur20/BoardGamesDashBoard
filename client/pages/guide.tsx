import { Typography } from '@mui/material';
import { NextPage } from 'next';
import React from 'react';
import Top from '../components/Top';
import isUserAuth from '../components/isAuthenticated';

const Guide: NextPage = () => {
    isUserAuth();

    return (
        <div>
            <Top page={3} />
            <Typography>Guide For GameDashBoard</Typography>
        </div>
    )
}

export default Guide;