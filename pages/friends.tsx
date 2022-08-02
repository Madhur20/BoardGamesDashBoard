import { Typography } from '@mui/material';
import { NextPage } from 'next';
import React from 'react';
import Top from '../components/Top';

const Friend: NextPage = () => {
    return (
        <div>
            <Top page={2} />
            <Typography>Friend</Typography>
        </div>
    )
}

export default Friend;