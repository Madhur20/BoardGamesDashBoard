import { Typography } from '@mui/material';
import { NextPage } from 'next';
import React from 'react';
import Top from '../components/Top';

const Friend: NextPage = () => {
    return (
        <div>
            <Top />
            <Typography>Friend</Typography>
        </div>
    )
}

export default Friend;