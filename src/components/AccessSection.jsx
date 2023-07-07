import arow from "../images/arow.png";
import girlYoga from "../images/girlYoga.png";
import graphic from "../images/graphic.png";
import onlineTechs from "../images/onlineTechs.png";
import styles from "./AccessSection.module.css";

export function AccessSection() {
  return (
    <section className={styles.access_section_background }>
      <div className={styles.access_section }>
      <h4 className={`text-3xl ${styles.title}`}>O que terá acesso?</h4>

      <div className={styles.main_container}
      data-aos="fade"
      data-aos-easing="linear"
      data-aos-duration="1500"
      >
        <div className={styles.sub_container}>
          <img src={onlineTechs} />
          <p className="text-md">
            Aulas ao vivo toda terça e quinta as 9h e as 19h com correção e
            ajustes
          </p>
        </div>
        
        <div className={styles.sub_container}>
          <img src={graphic} />
          <p className="text-md">
            Aulas com diferentes níveis e durações para não se sentir
            desestimulado
          </p>
        </div>

        <div className={styles.sub_container}>
          <img src={girlYoga} />
          <p className="text-md">
            Módulos desenvolvidos para cultivar disciplina, constância e presença
          </p>
        </div>

        <div className={styles.sub_container}>
          <img src={arow} />
          <p className="text-md">
            Estilos diferentes para variar sua prática: Hatha e Vinyasa
          </p>
        </div>
        
      </div>
      </div>
    </section>
  );
}
