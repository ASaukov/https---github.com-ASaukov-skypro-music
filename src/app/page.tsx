"use client";

import styles from "./page.module.css";
import { Main } from "../components/main/Main";
import { useState } from "react";
import { TrackType } from "@/types/tracks";
import { Player } from "@/components/player/Player";

export default function Home() {
  const [currentTrack, setCurrentTrack] = useState<TrackType | null>(null);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Main setCurrentTrack={setCurrentTrack} />
        {currentTrack && <Player currentTrack={currentTrack} />}
      </div>
    </div>
  );
}
