import yogaLogo from "../images/yoga_iclub.png";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header>
      <nav className={styles.headerNav}>
        <button className={`text-xl ${styles.button}`}>início</button>
        <button className={`text-xl ${styles.button}`}>yoga iclub</button>
        <button className={`text-xl ${styles.button}`}>alunos</button>

        <img src={yogaLogo}></img>

        <button className={`text-xl ${styles.button}`}>preços</button>
        <button className={`text-xl ${styles.button}`}>dúvidas</button>
        <button className={`text-xl ${styles.button}`}>contato</button>
      </nav>
    </header>
  );
}
