import { getTracks } from "@/api/api"
import { CenterblockPlaylist } from "../centerblockPlaylist/CenterblockPlaylist"
import { Filter } from "../filter/Filter"
import { Search } from "../search/search"
import styles from "./mainCenterblock.module.css"
import { TrackType } from "@/types/tracks"

export const MainCenterblock = async () => {
let tracks: TrackType[] = []
let err: string | null = null
try{
    tracks = await getTracks()
    console.log(tracks)
} catch (error) {
if (error instanceof Error) {
    console.log(error.message)
    err = error.message
}
}
    return (
        <div className={styles.mainCenterblock}>
            <Search />
            <Filter />
            <CenterblockPlaylist tracks={tracks}/>
          </div>
    )
}