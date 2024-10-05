import { TrackType } from "@/types/tracks";
import styles from "./Track.module.css";
import { FormateTime } from "@/utils/FormateTime";

type TrackProps = {
  track: TrackType;
  setCurrentTrack: (track: TrackType) => void;
};
export const Track = ({ track, setCurrentTrack }: TrackProps) => {
  const onClickTrack = () => {
    setCurrentTrack(track);
  };
  return (
    <div onClick={onClickTrack} key={track._id} className={styles.playlistItem}>
      <div className={styles.playlistTrack}>
        <div className={styles.trackTitle}>
          <div className={styles.trackTitleImage}>
            <svg className={styles.trackTitleSvg}>
              <use xlinkHref="/img/icon/sprite.svg#icon-note" />
            </svg>
          </div>
          <div className="track__title-text">
            <a className={styles.trackTitleLink} href="http://">
              {track.name} <span className={styles.trackTitleSpan} />
            </a>
          </div>
        </div>
        <div className={styles.trackAuthor}>
          <a className={styles.trackAuthorLink} href="http://">
            {track.author}
          </a>
        </div>
        <div className={styles.trackAlbum}>
          <a className={styles.trackAlbumLink} href="http://">
            {track.album}
          </a>
        </div>
        <div className="track__time">
          <svg className={styles.trackTimeSvg}>
            <use xlinkHref="/img/icon/sprite.svg#icon-like" />
          </svg>
          <span className={styles.trackTimeText}>
            {FormateTime(track.duration_in_seconds)}
          </span>
        </div>
      </div>
    </div>
  );
};
