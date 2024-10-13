import { Playlist } from "../playlist/Playlist";
import { TitlePlaylist } from "../titlePlaylist/TitlePlaylist";
import styles from "./CenterblockPlaylist.module.css";


export const CenterblockPlaylist = () => {
  return (
    <div className={styles.centerblockContent}>
      <TitlePlaylist />
      <Playlist/>
    </div>
  );
};
