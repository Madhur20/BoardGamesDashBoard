import type { NextPage } from 'next'
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
