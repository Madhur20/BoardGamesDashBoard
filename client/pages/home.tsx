import React, { useContext } from 'react';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Top from '../components/Top';
import AddFriends from '../components/home/AddFriends';
import AddNumPlayers from '../components/home/AddNumPlayers';
import AddGenre from '../components/home/AddGenre';
import FindGameButton from '../components/home/FindGameButton';
import isUserAuth from '../components/isAuthenticated';
import { GlobalContext } from './_app';

const Home: NextPage = () => {
  isUserAuth();
  
  let user: any;

  if (typeof window !== "undefined") {
      user = localStorage.getItem("username");
  } 

  const { setUserName } = useContext(GlobalContext);
  setUserName(user);
  return (
    <div className={styles.container1}>
      <Top page={0} />
      <div style={{ paddingTop: 150, display: 'flex', flexDirection: 'column', padding: 50, backgroundColor: "#2f2f2f", justifyContent: "center" }}>
        <div style={{ display: 'flex', padding: 30, paddingBottom: 100, backgroundColor: "#2f2f2f", justifyContent: "center" }}>
          <div style={{ padding: 30 }}><AddFriends /></div>
          <div style={{ padding: 30 }}><AddNumPlayers /></div>
          <div style={{ padding: 30 }}><AddGenre /></div>
        </div>

        <div style={{ display: 'flex', padding: 30, justifyContent: "center" }}><FindGameButton /></div>
      </div>
    </div>
  )
}

export default Home;