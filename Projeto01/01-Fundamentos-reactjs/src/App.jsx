import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import {Post} from './components/Post'
import { Comment } from './components/Comment'

import styles from'./App.module.css'
import './global.css'


function App() {
  
  return (
    <>
    <Header></Header>
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
      <Post>
      </Post>
      <Post/>
      </main>

    </div>
    </>
  )
}

export default App
