import { Link } from "react-scroll";
import yogaLogo from "../images/yoga_iclub.png";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header>
      <nav className={styles.headerNav}>
        <button className={`text-xl ${styles.button}`}>
          <Link to="start" duration={2000} delay={100} offset={-96}> início </Link>
        </button>
        <button className={`text-xl ${styles.button}`}>
          <Link to="iclub" duration={2000} delay={100} offset={-96}> yoga iclub </Link>
        </button>
        <button className={`text-xl ${styles.button}`}>
          <Link to="students" duration={2000} delay={100} offset={-96}> alunos </Link>
        </button>

        <img src={yogaLogo}></img>

        <button className={`text-xl ${styles.button}`}>
          <Link to="prices" duration={2000} delay={100} offset={-96}> preços </Link>
        </button>
        <button className={`text-xl ${styles.button}`}>
          <Link to="doubts" duration={2000} delay={100} offset={-96}> dúvidas </Link>
        </button>
        <button className={`text-xl ${styles.button}`}>
          <Link to="contact" duration={2000} delay={100} offset={-96}> contato </Link>
        </button>
      </nav>
    </header>
  );
}
