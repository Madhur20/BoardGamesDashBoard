import { Typography } from '@mui/material';
import { NextPage } from 'next';
import React from 'react';
import Top from '../components/Top';

const Guide: NextPage = () => {
    return (
        <div>
            <Top page={4} />
            <Typography>Guide</Typography>
        </div>
    )
}

export default Guide;