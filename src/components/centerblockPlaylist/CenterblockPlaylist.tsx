import { TrackType } from "@/types/tracks";
import { Playlist } from "../playlist/Playlist";
import { TitlePlaylist } from "../titlePlaylist/TitlePlaylist";
import styles from "./CenterblockPlaylist.module.css";

type CenterblockPlaylistProps = {
  tracks: TrackType[], 
  setCurrentTrack: (track: TrackType) => void
}
export const CenterblockPlaylist = ({tracks, setCurrentTrack}: CenterblockPlaylistProps) => {
  return (
    <div className={styles.centerblockContent}>
      <TitlePlaylist />
      <Playlist setCurrentTrack={setCurrentTrack} tracks={tracks}/>
    </div>
  );
};
