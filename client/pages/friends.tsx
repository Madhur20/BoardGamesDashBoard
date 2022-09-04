import { NextPage } from 'next';
import React, { createContext, useState } from 'react';
import Top from '../components/Top';
import InteractiveList from '../components/friends/FriendsList';
import AddFriend from '../components/friends/AddFriends';
import isUserAuth from '../components/isAuthenticated';

export const FriendsContext = createContext([]);

let user: any;

if (typeof window !== "undefined") {
    user = localStorage.getItem("username");
} 

async function foo() {
    const res = await fetch("http://localhost:8080/putFriend" + user);
    const friendsList: string[] | [] = await res.json();
    return friendsList;
}

const Friend: NextPage = () => {
    isUserAuth();
    const [friends, setFriends] = useState([]);

    React.useEffect(() => {
        foo().then((res) => setFriends(res));
    }, [])

    return (
        <FriendsContext.Provider value={{friends, setFriends}}>
            <div>
                <Top page={2} />
                <div>
                    <InteractiveList />
                    <AddFriend />
                </div>
            </div>
        </FriendsContext.Provider>
    )
}

export default Friend;