import { flexbox } from '@mui/system'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ButtonAppBar from './AppBar'
import CenteredTabs from './MenuBar'

const Home: NextPage = () => {
  return (
    <div className={styles.container1}>
      <div className={styles.container2}>
        <ButtonAppBar></ButtonAppBar>
      </div>
      <div className={styles.container2}>
        <CenteredTabs></CenteredTabs>
      </div>
    </div>
  )
}

export default Home
