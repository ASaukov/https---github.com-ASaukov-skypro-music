import { CenterblockPlaylist } from "../centerblockPlaylist/CenterblockPlaylist"
import { Filter } from "../filter/Filter"
import { Search } from "../search/search"
import styles from "./mainCenterblock.module.css"

export const MainCenterblock = () => {
    return (
        <div className={styles.mainCenterblock}>
            <Search />
            <Filter />
            <CenterblockPlaylist/>
          </div>
    )
}