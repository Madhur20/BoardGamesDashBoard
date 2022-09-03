import { NextPage } from 'next';
import React from 'react';
import Top from '../components/Top';
import EnhancedTable from '../components/games/GamesList';
import AddGame from '../components/games/AddGame';
import isUserAuth from '../components/isAuthenticated';

const Games: NextPage = () => {
    isUserAuth();

    return (
        <div>
            <Top page={1} />
            <div>
                <EnhancedTable></EnhancedTable>
                <AddGame />
            </div>
        </div>
    )
}

export default Games;