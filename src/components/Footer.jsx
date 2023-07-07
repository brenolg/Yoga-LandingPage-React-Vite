import { Link } from "react-scroll";
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
            <button className="text-md ">
              <Link to="start" duration={2000} delay={100} offset={-96}> início </Link>
            </button>

            <button className="text-md ">
              <Link to="iclub" duration={2000} delay={100} offset={-96}> iclub </Link>
            </button>
          </div>

          <div className={styles.scroll_sub_container}>
            
            <button className="text-md">
              <Link to="students" duration={2000} delay={100} offset={-96}> alunos </Link>
            </button>
            <button className="text-md">
              <Link to="prices" duration={2000} delay={100} offset={-48}> preços </Link>
            </button>
          </div>

          <div className={styles.scroll_sub_container}>
            <button className="text-md">
              <Link to="doubts" duration={2000} delay={100} offset={-48}> dúvidas </Link>
            </button>
            <button className="text-md">
              <Link to="contact" duration={2000} delay={100} offset={-96}> contato </Link>
            </button>
          </div>
        </div>

        <div>
          <a 
            href="https://www.instagram.com/isabellacayuela/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram}/>
          </a> 

          <a 
          href="https://api.whatsapp.com/send/?phone=5531996793158"
          target="_blank"
          rel="noopener noreferrer"
          >
            <img src={whatsapp}/>
          </a> 

          <a 
          href="https://www.youtube.com/@isabellacayuelayoga"
          target="_blank"
          rel="noopener noreferrer"
          >
            <img src={youtube}/>
          </a> 
        </div>

        <img src={logo}/>
      </div>

    </footer>
  );
}
