import { TrackType } from "@/types/tracks";
import { Playlist } from "../playlist/Playlist";
import { TitlePlaylist } from "../titlePlaylist/TitlePlaylist";
import styles from "./CenterblockPlaylist.module.css";

type CenterblockPlaylistProps = {tracks: TrackType[]}
export const CenterblockPlaylist = ({tracks}: CenterblockPlaylistProps) => {
  return (
    <div className={styles.centerblockContent}>
      <TitlePlaylist />
      <Playlist tracks={tracks}/>
    </div>
  );
};
