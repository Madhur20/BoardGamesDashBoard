import { Typography } from '@mui/material';
import { NextPage } from 'next';
import React from 'react';
import Top from '../components/Top';
import EnhancedTable from './GamesList';
import styles from '../styles/Home.module.css';

const Games: NextPage = () => {
    return (
        <div>
            <Top page={1} />
            <div>
                <EnhancedTable></EnhancedTable> 
            </div>
        </div>
    )
}

export default Games;