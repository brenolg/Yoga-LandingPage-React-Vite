import { Link } from "react-scroll";
import bela from "../images/bela_hero.png";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <section className={styles.hero_section} id="start">
      <div className={`${styles.hero_text}`} 
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-duration="1500"
      >
        <h2 className={`H2 ${styles.main_title}`}>
          Te apresento a plataforma de Yoga online mais completa que você já
          viu!
        </h2>
        
        <div className={`text-sm ${styles.main_text}`}>
          <p>
            Quer começar mas não sabe por onde? Já pratica e quer evolui? O Yoga
            iClub é para todos! 
          </p>

          <p className={`text-sm ${styles.main_text}`}>
            Aqui você não precisa ter flexibilidade, força,
            peso ou idade ideais. Vamos praticar técnicas milenares e alcançar os
            benefícios juntos!
          </p>
          
          <p className={`text-sm ${styles.main_text}`}>
            Yoga iClub é para todos aqueles que acreditam que é
            possivel ter uma vida equilibrada! Meu objetivo é te ajudar a
            encontrar a prática e rotina ideais pra você!
          </p>
        </div>

        <div className={styles.button_container}>
          <button className={`Button ${styles.button}`}>
            <Link to="prices" duration={2000} delay={100} offset={-96}>
              Quero começar!
            </Link>
            </button>
            
          <span className={`text-md ${styles.span}`}>
            + de 500 vidas impactadas
          </span>
        </div>
      </div>

      <div className={styles.img_container}
      data-aos="fade"
      data-aos-easing="linear"
      data-aos-duration="1800"
      >
        <div className={styles.outer_element}>
          <img className={styles.bela_img} src={bela} />
        </div>
      </div>
    </section>
  );
}
