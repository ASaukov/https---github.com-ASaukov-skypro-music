"use client";

import styles from "./Filter.module.css";
import { useState } from "react";
import { FilterItem } from "./FilterItem";
import { getUniqueValues } from "@/utils/GetUniqueValues";
import { useAppSelector } from "@/store/store";


export const Filter = () => {
  const {tracks} = useAppSelector(state => state.playlist)
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const filterOptions = ["По умолчанию", "Сначала новые", "Сначала старые"];
  const filters = [
    {
      name: "исполнителю",
      key: "autor",
      list: getUniqueValues(tracks, "author"),
    },
    {
      name: "жанру",
      key: "genre",
      list: getUniqueValues(tracks, "genre"),
    },
    {
      name: "году выпуска",
      key: "year",
      list: filterOptions,
    },
  ];

  const handleFilter = (filterName: string) => {

    setActiveFilter((prev) => (prev === filterName ? null : filterName));
  };

  return (
    <>
      <h2 className={styles.centerblockH2}>Треки</h2>
      <div className={styles.centerblockFilter}>
        <div className={styles.filterTitle}>Искать по:</div>
        {filters.map((filter) => (
          <FilterItem
            handleFilterClick={() => handleFilter(filter.key)}
            name={filter.name}
            key={filter.key}
            list={filter.list}
            isActiv={activeFilter === filter.key}
          />
        ))}
      </div>
    </>
  );
};
