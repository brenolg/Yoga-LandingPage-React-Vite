import instagram from "../images/instagram.svg";
import whatsapp from "../images/whatsapp.svg";
import logo from "../images/yoga_iclub.png";
import youtube from "../images/youtube.svg";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer>
      <div className={styles.main_container}>
        
        <div className={styles.scroll_main_container}>
          <div className={styles.scroll_sub_container}>
            <button className="text-md ">inicio</button>
            <button className="text-md ">iclub</button>
          </div>

          <div className={styles.scroll_sub_container}>
            <button className="text-md">alunos</button>
            <button className="text-md">aulas</button>
          </div>

          <div className={styles.scroll_sub_container}>
            <button className="text-md">duvidas</button>
            <button className="text-md">contatos</button>
          </div>
        </div>

        <div>
          <img src={instagram}/>
          <img src={whatsapp}/>
          <img src={youtube}/>
        </div>

        <img src={logo}/>
      </div>

    </footer>
  );
}
