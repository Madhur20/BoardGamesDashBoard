import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Top from '../components/Top'
import { Button } from '@mui/material'
import Link from 'next/link'

const Index: NextPage = () => {
  return (
    <div className={styles.container1}>
     <Link href="/home"><Button variant="outlined" disableElevation color="primary" size='large'>Login</Button></Link>
    </div>
  )
}

export default Index;
