import bela from "../images/bela_hero.png";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <section className={styles.hero_section}>
      <div className={`${styles.hero_text}`}>
        <h2 className={`H2 ${styles.main_title}`}>
          Te apresento a plataforma de Yoga online mais completa que você já
          viu!
        </h2>
        <p className={`text-sm ${styles.main_text}`}>
          Quer começar mas não sabe por onde? Já pratica e quer evolui? O Yoga
          iClub é para todos! Aqui você não precisa ter flexibilidade, força,
          peso ou idade ideais. Vamos praticar técnicas milenares e alcançar os
          beneficios juntos! Yoga iClub é para todos aqueles que acreditam que é
          possivel ter uma vida equilibrada! Meu objetivo é te ajudar a
          encontrar a prática e rotina ideais pra você!
        </p>

        <div className={styles.button_container}>
          <button className={`Button ${styles.button}`}>Quero começar!</button>
          <span className={`text-md ${styles.span}`}>
            + de 500 vidas impactadas
          </span>
        </div>
      </div>

      <div className={styles.img_container}>
        <div className={styles.outer_element}>
          <img className={styles.bela_img} src={bela} />
        </div>
      </div>
    </section>
  );
}
