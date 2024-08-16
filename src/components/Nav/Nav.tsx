'use client'
import Image from "next/image"
import styles from "./Nav.module.css";
import React from "react";


export const Nav = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const toggleOpenNav: React.MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen((prev) => !prev)
  }
  

    return (
    <nav className={styles.mainNav}>
        <div className={styles.navLogo}>
          <Image className={styles.logoImage} src="/img/logo.png" alt="logo" width={150} height={60} />
        </div>
        <div className={styles.navBurger} onClick={toggleOpenNav}>
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </div>
        {isOpen && (
          <div className={styles.navMenu}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <a href="#" className={styles.menuLink}>
                Главное
              </a>
            </li>
            <li className={styles.menuItem}>
              <a href="#" className={styles.menuLink}>
                Мой плейлист
              </a>
            </li>
            <li className={styles.menuItem}>
              <a href="../signin.html" className={styles.menuLink}>
                Войти
              </a>
            </li>
          </ul>
        </div>
        )}
        
      </nav>
    )
}