
import { Track } from "../track/Track";
import styles from "./Playlist.module.css";
import { useAppSelector } from "@/store/store";


export const Playlist = () => {
  const {tracks} = useAppSelector (
    state => state.playlist
  );

  
  return (
    <div className={styles.contentPlaylist}>
      {tracks.map((track) => (
        <Track
          key={track._id}
          track={track}
        />
      ))}
    </div>
  );
};
