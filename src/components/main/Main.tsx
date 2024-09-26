import { TrackType } from "@/types/tracks"
import { MainCenterblock } from "../mainCenterblock/mainCenterblock"
import { Nav } from "../Nav/Nav"
import { Sidebar } from "../sidebar/Sidebar"
import styles from "./Main.module.css"
type props={
  setCurrentTrack: (track: TrackType) => void
}

export const Main = ({setCurrentTrack}: props) => {
    return (
        <main className={styles.main}>
          <Nav />
          <MainCenterblock setCurrentTrack={setCurrentTrack}/>
          <Sidebar />
        </main>
    )
}