import body from "../images/body.png";
import mind from "../images/mind.png";
import soul from "../images/soul.png";
import styles from "./PillarsSection.module.css";

export function PillarsSection() {
  return (
    <section className={styles.pillars_section} id="iclub">
      <h4 className={`text-3xl ${styles.title}`}>
        Como funciona o Yoga iClub?
      </h4>

      <div className={styles.pillars_container} >

        <div className={styles.pillar}
        data-aos="fade"
        data-aos-easing="linear"
        data-aos-duration="1500"
        >
          <div className={styles.outer_element}>
            <img className={styles.pillar_img} src={body}></img>
          </div>
          <h4 className="H4">body</h4>
          <p className="text-md">
            Práticas de yoga desenvolvidas para construir consciência do corpo,
            da respiração, força, flexibilidade, equilíbrio e bem estar com
            ásanas e pránayamas
          </p>
        </div>

        <div className={styles.pillar}       
        data-aos="fade"
        data-aos-easing="linear"
        data-aos-duration="1500"
        >
          <div className={styles.outer_element}>
            <img className={styles.pillar_img} src={mind}></img>
          </div>
          <h4 className="H4">mind</h4>
          <p className="text-md">
            Meditações guiadas elaboradas para te tornar mais consciente de seus
            pensamentos, desenvolvendo maior inteligência e gestão emocional
          </p>
        </div>

        <div className={styles.pillar}
        data-aos="fade"
        data-aos-easing="linear"
        data-aos-duration="1500"
        >
          <div className={styles.outer_element}>
            <img className={styles.pillar_img} src={soul}></img>
          </div>
          <h4 className="H4">soul</h4>
          <p className="text-md">
            Yoga é ferramenta para desenvolvimento completo do ser, é elevação
            espiritual. Aulas teóricas que vão te convidar a um mergulho ainda
            mais profundo.
          </p>
        </div>
      </div>
    </section>
  );
}
