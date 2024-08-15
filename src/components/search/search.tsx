import styles from "./search.module.css"

export const Search = () => {
    return (
        <div className={styles.centerblockSearch}>
          <svg className={styles.searchSvg}>
            <use xlinkHref="/img/icon/sprite.svg#icon-search" />
          </svg>
          <input
            className={styles.searchText}
            type="search"
            placeholder="Поиск"
            name="search"
          />
        </div>
    )
}