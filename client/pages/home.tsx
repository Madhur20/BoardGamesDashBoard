import React, { useContext } from 'react';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Top from '../components/Top';
import HomePage from '../components/HomePage';
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
      <div style={{ paddingTop: 150, display: 'flex', flexDirection: 'row', padding: 50, backgroundColor: "#2f2f2f", justifyContent: "center" }}>
        <HomePage />
      </div>
    </div>
  )
}

export default Home;