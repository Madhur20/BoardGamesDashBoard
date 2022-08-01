import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Top from '../components/Top'

const Home: NextPage = () => {
  return (
    <div className={styles.container1}>
      <Top />
    </div>
  )
}

export default Home;
