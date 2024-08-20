import { TrackType } from "@/types/tracks"
import { Track } from "../track/Track"
import styles from "./Playlist.module.css"

type PlayListProps = {tracks: TrackType[]}
export const Playlist = ({tracks}: PlayListProps) => {
    return (
        <div className={styles.contentPlaylist}>
            {tracks.map((track) => (
                <Track key={track._id} track={track}/>
            ))}
            
          </div>
    )
}