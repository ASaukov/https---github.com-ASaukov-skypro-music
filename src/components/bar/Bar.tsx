import { TrackType } from "@/types/tracks";
import { Player } from "../player/Player";
import styles from "./Bar.module.css"
type props = {
  currentTrack: TrackType
}

export const Bar = ({currentTrack}: props) => {
  return (
    <div className={styles.bar}>
      <div className={styles.barContent}>
        <div className={styles.barPlayerProgress} />
        <div className={styles.barPlayerBlock}>
          <Player currentTrack={currentTrack}/>
        </div>
      </div>
    </div>
  );
};
