"use client";

import { getTracks } from "@/api/api";
import { CenterblockPlaylist } from "../centerblockPlaylist/CenterblockPlaylist";
import { Filter } from "../filter/Filter";
import { Search } from "../search/search";
import styles from "./mainCenterblock.module.css";
import { TrackType } from "@/types/tracks";
import { useEffect, useState } from "react";
type props = {
  setCurrentTrack: (track: TrackType) => void;
};

export const MainCenterblock = ({ setCurrentTrack }: props) => {
  const [tracks, setTracks] = useState<TrackType[]>([]);
  const [err, setErr] = useState<string | null>(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getTracks();
        setTracks(res);
        
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
          setErr(error.message);
        }
      }
    };
    getData();
  });
  // let tracks: TrackType[] = []
  // let err: string | null = null

  return (
    <div className={styles.mainCenterblock}>
      <Search />
      <Filter tracks={tracks}/>
      <CenterblockPlaylist setCurrentTrack={setCurrentTrack} tracks={tracks} />
    </div>
  );
};
