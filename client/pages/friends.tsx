import { NextPage } from 'next';
import React from 'react';
import Top from '../components/Top';
import InteractiveList from '../components/friends/FriendsList';

const Friend: NextPage = () => {
    return (
        <div>
            <Top page={2} />
            <div>
                <InteractiveList></InteractiveList>
            </div>
        </div>
    )
}

export default Friend;