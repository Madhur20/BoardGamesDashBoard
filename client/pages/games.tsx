import { NextPage } from 'next';
import React from 'react';
import Top from '../components/Top';
import EnhancedTable from '../components/games/GamesList';
import AddGame from '../components/games/AddGame';

const Games: NextPage = () => {
    return (
        <div>
            <Top page={2} />
            <div>
                <EnhancedTable></EnhancedTable>
                <AddGame />
            </div>
        </div>
    )
}

export default Games;