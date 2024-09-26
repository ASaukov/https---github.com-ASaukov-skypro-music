"use client";

import styles from "./page.module.css";
import { Bar } from "../components/bar/Bar";
import { Main } from "../components/main/Main";
import { useState } from "react";
import { TrackType } from "@/types/tracks";

export default function Home() {
  const [currentTrack, setCurrentTrack] = useState<TrackType | null>(null);
  console.log(currentTrack);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Main setCurrentTrack={setCurrentTrack} />
        {currentTrack && <Bar currentTrack={currentTrack} />}
      </div>
    </div>
  );
}
