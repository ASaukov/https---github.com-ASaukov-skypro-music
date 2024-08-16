import styles from "./Filter.module.css";
import classNames from "classnames";

export const Filter = () => {
  return (
    <>
      <h2 className={styles.centerblockH2}>Треки</h2>
      <div className={styles.centerblockFilter}>
        <div className={styles.filterTitle}>Искать по:</div>
        <div className={classNames(styles.filterButton, styles._btnText)}>исполнителю</div>
        <div className={classNames(styles.filterButton, styles._btnText)}>году выпуска</div>
        <div className={classNames(styles.filterButton, styles._btnText)}>жанру</div>
      </div>
    </>
  );
};
