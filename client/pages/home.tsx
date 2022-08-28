import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Top from '../components/Top'
import AddFriends from '../components/home/AddFriends'
import AddNumPlayers from '../components/home/AddNumPlayers'
import AddGenre from '../components/home/AddGenre'
import FindGameButton from '../components/home/FindGameButton'
import testBackEnd from '../pages/testBackend'

const Home: NextPage = () => {
  return (
    <div className={styles.container1}>
      <Top page={0} />
      <div style={{ paddingTop: 150, display: 'flex', flexDirection: 'column', padding: 50, backgroundColor: "#2f2f2f", justifyContent: "center" }}>
        <div style={{ display: 'flex', padding: 30, paddingBottom: 100, backgroundColor: "#2f2f2f", justifyContent: "center" }}>
          <div style={{ padding: 30 }}><AddFriends></AddFriends></div>
          <div style={{ padding: 30 }}><AddNumPlayers></AddNumPlayers></div>
          <div style={{ padding: 30 }}><AddGenre></AddGenre></div>
        </div>

        <div style={{ display: 'flex', padding: 30, justifyContent: "center" }}><FindGameButton></FindGameButton></div>
        <div style={{ display: 'flex', padding: 30, justifyContent: "center" }}>{testBackEnd()}</div>
      </div>
    </div>
  )
}

export default Home;