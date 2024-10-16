"use client";

import styles from "./page.module.css";
import { Main } from "../components/main/Main";
import { Player } from "@/components/player/Player";
import { useAppSelector } from "@/store/store";

export default function Home() {
  const {currentTrack} = useAppSelector(state => state.playlist)
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Main />
        {currentTrack && <Player />}
      </div>
    </div>
  );
}
