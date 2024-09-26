import { TrackType } from "@/types/tracks";
import { Track } from "../track/Track";
import styles from "./Playlist.module.css";

type PlayListProps = {
  tracks: TrackType[];
  setCurrentTrack: (track: TrackType) => void;
};
export const Playlist = ({ tracks, setCurrentTrack }: PlayListProps) => {
  return (
    <div className={styles.contentPlaylist}>
      {tracks.map((track) => (
        <Track
          setCurrentTrack={setCurrentTrack}
          key={track._id}
          track={track}
        />
      ))}
    </div>
  );
};
