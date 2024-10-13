"use client";

import styles from "./Player.module.css";
import classNames from "classnames";
import {
  ChangeEvent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import ProgressBar from "../progressBar/ProgressBar";
import { FormateTime } from "@/utils/FormateTime";
import { setIsShuffle, setNextTrack, setPrevTrack, setShuffle } from "@/store/features/playlistSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";


export const Player = () => {
  const dispatch = useAppDispatch();

  const {isShuffle, currentTrack, tracks} = useAppSelector(state => state.playlist)
  const [isPlay, setIsPlay] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [progress, setProgress] = useState({
    currentTime: 0,
    duration: 0,
  });
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const onTogglePlay = () => {
    if (audioRef.current) {
      if (isPlay) {
        setIsPlay(false);
        audioRef.current.pause();
      } else {
        setIsPlay(true);
        audioRef.current.play();
      }
    }
  };

  useEffect(() => {
    // setIsPlay(false);
    onTogglePlay();
  }, []);

  const onRepeat = () => {
    if (audioRef.current) {
      if (isRepeat) {
        audioRef.current.loop = false;
      } else {
        audioRef.current.loop = true;
      }
      setIsRepeat(!isRepeat);
    }
  };

  const onChangeVolume = (e: ChangeEvent<HTMLInputElement>) => {
    const volume = Number(e.target.value) / 100;
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  };

  const onChangeTime = (e: SyntheticEvent<HTMLAudioElement, Event>) => {
    console.log(currentTrack?.track_file);
    setProgress({
      currentTime: e.currentTarget.currentTime,
      duration: e.currentTarget.duration,
    });
  };

  const onChangeProgress = (e: ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(e.target.value);
    }
  };

  const next = () => {
    dispatch(setNextTrack())
    console.log(tracks);
  };

  const prev = () => {
    dispatch(setPrevTrack())
  };

  const toggleShuffle = () => {
    dispatch(setIsShuffle(!isShuffle));
  };

  useEffect (() => {
    isShuffle && dispatch(setShuffle())
  }, [isShuffle]);
    
  // console.log(isShuffle);

  return (
    <>
      <div className={styles.bar}>
        <div className={styles.barContent}>
          <div className={styles.barTimer}>
            {FormateTime(progress.currentTime)} / {}
            {FormateTime(progress.duration)}
          </div>
          <audio
            className={styles.playerBrouser}
            onTimeUpdate={onChangeTime}
            ref={audioRef}
            controls
            src={currentTrack!.track_file}
          />
          <ProgressBar
            max={progress.duration}
            value={progress.currentTime}
            step={0.01}
            onChange={onChangeProgress}
          />
          <div className={styles.barPlayerBlock}>
            <div className={styles.barPlayer}>
              <div className={styles.playerControls}>
                <div 
                onClick={prev} 
                className={styles.playerBtnPrev}>
                  <svg className={styles.playerBtnPrevSvg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-prev" />
                  </svg>
                </div>
                <div
                  onClick={onTogglePlay}
                  className={classNames(styles.playerBtnPlay, styles._btn)}
                >
                  <svg className={styles.playerBtnPlaySvg}>
                    {!isPlay ? (
                      <use xlinkHref="/img/icon/sprite.svg#icon-play" />
                    ) : (
                      <use xlinkHref="/img/icon/sprite.svg#icon-pause" />
                    )}
                  </svg>
                </div>
                <div onClick={next} className={styles.playerBtnNext}>
                  <svg className={styles.playerBtnNextSvg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-next" />
                  </svg>
                </div>
                <div
                  onClick={onRepeat}
                  className={classNames(
                    styles.playerBtnRepeat,
                    styles._btnIcon,
                    {
                      [styles.active]: isRepeat,
                    }
                  )}
                >
                  <svg className={styles.playerBtnRepeatSvg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-repeat" />
                  </svg>
                </div>
                <div
                  onClick={toggleShuffle}
                  className={classNames(
                    styles.playerBtnShuffle,
                    styles._btnIcon,
                    {
                      [styles.active]: isShuffle
                    }
                  )}
                >
                  <svg className={styles.playerBtnShuffleSvg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-shuffle" />
                  </svg>
                </div>
              </div>
              <div className={styles.playerTrackPlay}>
                <div className={styles.trackPlayContain}>
                  <div className={styles.trackPlayImage}>
                    <svg className={styles.trackPlaySvg}>
                      <use xlinkHref="/img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className={styles.trackPlayAuthor}>
                    <a className={styles.trackPlayAuthorLink} href="http://">
                      {currentTrack.name}
                    </a>
                  </div>
                  <div className={styles.trackPlayAlbum}>
                    <a className={styles.trackPlayAlbumLink} href="http://">
                      {currentTrack.author}
                    </a>
                  </div>
                </div>
                <div className={styles.trackPlayLikeDis}>
                  <div
                    className={classNames(
                      styles.trackPlayLike,
                      styles._btnIcon
                    )}
                  >
                    <svg className={styles.trackPlayLikeSvg}>
                      <use xlinkHref="/img/icon/sprite.svg#icon-like" />
                    </svg>
                  </div>
                  <div
                    className={classNames(
                      styles.trackPlayDislike,
                      styles._btnIcon
                    )}
                  >
                    <svg className={styles.trackPlayDislikeSvg}>
                      <use xlinkHref="/img/icon/sprite.svg#icon-dislike" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.barVolumeBlock}>
              <div className={styles.volumeContent}>
                <div className={styles.volumeImage}>
                  <svg className={styles.volumeSvg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-volume" />
                  </svg>
                </div>
                <div className={classNames(styles.volumeProgress, styles._btn)}>
                  <input
                    onChange={onChangeVolume}
                    className={classNames(
                      styles.volumeProgressLine,
                      styles._btn
                    )}
                    type="range"
                    name="range"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
