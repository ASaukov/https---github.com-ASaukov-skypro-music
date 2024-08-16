import styles from "./Sidebar.module.css"
import { SidebarItem } from "../sidebarItem/SidebarItem";

export const Sidebar = () => {
  return (
    <div className={styles.mainSidebar}>
      <div className={styles.sidebarPersonal}>
        <p className={styles.sidebarPersonalName}>Sergey.Ivanov</p>
        <div className={styles.sidebarIcon}>
          <svg>
            <use xlinkHref="/img/icon/sprite.svg#logout" />
          </svg>
        </div>
      </div>
      <div className={styles.sidebarBlock}>
        <div className={styles.sidebarList}>
          <SidebarItem/>
          <SidebarItem/>
          <SidebarItem/>
        </div>
      </div>
    </div>
  );
};
