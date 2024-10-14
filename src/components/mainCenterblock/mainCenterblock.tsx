"use client";

import { getTracks } from "@/api/api";
import { CenterblockPlaylist } from "../centerblockPlaylist/CenterblockPlaylist";
import { Filter } from "../filter/Filter";
import { Search } from "../search/search";
import styles from "./mainCenterblock.module.css";

import { useEffect, useState } from "react";
import { useAppDispatch } from "@/store/store";
import { setPlaylist } from "@/store/features/playlistSlice";

export const MainCenterblock = () => {
  const dispatch = useAppDispatch();

  const [err, setErr] = useState<string | null>(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getTracks();
        dispatch(setPlaylist(res));
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
          setErr(error.message);
        }
      }
    };
    getData();
  }, []);
  return (
    <div className={styles.mainCenterblock}>
      <Search />
      <Filter />
      <CenterblockPlaylist />
    </div>
  );
};
