import Image from "next/image"
import styles from "./sidebarItem.module.css"

export const SidebarItem = () => {
    return (
        <div className={styles.sidebarItem}>
            <a className={styles.sidebarLink} href="#">
              <Image
                className={styles.sidebarImg}
                src="/img/playlist01.png"
                alt="day's playlist"
                width={170}
                height={60}
              />
            </a>
          </div>
    )
}