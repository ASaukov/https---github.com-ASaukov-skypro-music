import classNames from "classnames";
import styles from "./Filter.module.css";

type FilterItemprops = {
  name: string;
  list: string[];
  handleFilterClick: () => void;
  isActiv: boolean;
};

export const FilterItem = ({
  name,
  list,
  handleFilterClick,
  isActiv,
}: FilterItemprops) => {
  return (
    <div>
      <div
        onClick={handleFilterClick}
        className={classNames(styles.filterButton, styles._btnText, {[styles.activ]: isActiv})}
      >
        {name}
      </div>
      {isActiv && (<div className={styles.modal}>
        <ul className={styles.filterModal}>
          {list.map((el) => (
            <li className={styles.modalItem} key={el}>{el}</li>
          ))}
        </ul>
        </div>
      )}
    </div>
  );
};
