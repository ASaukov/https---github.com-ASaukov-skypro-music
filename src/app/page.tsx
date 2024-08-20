import styles from "./page.module.css";
import { Bar } from "../components/bar/Bar";
import { Main } from "../components/main/Main";


export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Main/>
        <Bar />
      </div>
    </div>
  );
}