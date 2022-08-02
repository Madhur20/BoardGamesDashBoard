import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Top from '../components/Top'
import { Typography } from '@mui/material'

const Home: NextPage = () => {
  return (
    <div className={styles.container1}>
      <Top page={0} />
      <Typography>Home</Typography>
    </div>
  )
}

export default Home;
