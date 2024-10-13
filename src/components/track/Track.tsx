import { TrackType } from "@/types/tracks";
import styles from "./Track.module.css";
import { FormateTime } from "@/utils/FormateTime";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setCurrentTrack } from "@/store/features/playlistSlice";

type TrackProps = {
  track: TrackType;
};
export const Track = ({ track }: TrackProps) => {
  const { currentTrack, isPlay } = useAppSelector((state) => state.playlist);

  const dispatch = useAppDispatch();

  const onClickTrack = (track: TrackType) => {
    dispatch(setCurrentTrack(track));
  };
  return (
    <div
      onClick={() => onClickTrack(track)}
      key={track._id}
      className={styles.playlistItem}
    >
      <div className={styles.playlistTrack}>
        <div className={styles.trackTitle}>
          <div className={styles.trackTitleImage}>
            {currentTrack === track ? (
              <span
                className={
                  isPlay ? styles.trackTitleActivePlay : styles.trackTitleActive
                }
              />
            ) : (
              <svg className={styles.trackTitleSvg}>
                <use xlinkHref="/img/icon/sprite.svg#icon-note" />
              </svg>
            )}
          </div>
          <div className="track__title-text">
            <a
              className={styles.trackTitleLink}
              // href="http://"
            >
              {track.name} <span className={styles.trackTitleSpan} />
            </a>
          </div>
        </div>
        <div className={styles.trackAuthor}>
          <a
            className={styles.trackAuthorLink}
            // href="http://"
          >
            {track.author}
          </a>
        </div>
        <div className={styles.trackAlbum}>
          <a
            className={styles.trackAlbumLink}
            // href="http://"
          >
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
