import { TrackType } from "@/types/tracks"
import { MainCenterblock } from "../mainCenterblock/mainCenterblock"
import { Nav } from "../Nav/Nav"
import { Sidebar } from "../sidebar/Sidebar"
import styles from "./Main.module.css"

export const Main = () => {
    return (
        <main className={styles.main}>
          <Nav />
          <MainCenterblock />
          <Sidebar />
        </main>
    )
}