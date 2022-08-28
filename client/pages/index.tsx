import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Top from '../components/Top'
import { Button } from '@mui/material'

const Index: NextPage = () => {
  return (
    <div className={styles.container1}>
      <Button>Login</Button>
    </div>
  )
}

export default Index;
