import { NextPage } from 'next';
import React from 'react';
import Top from '../components/Top';
import InteractiveList from '../components/friends/FriendsList';
import AddFriend from '../components/friends/AddFriends';

const Friend: NextPage = () => {
    return (
        <div>
            <Top page={3} />
            <div>
                <InteractiveList></InteractiveList>
                <AddFriend />
            </div>
        </div>
    )
}

export default Friend;