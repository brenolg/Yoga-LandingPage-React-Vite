import accessImg from "../images/access_img.png";
import styles from "./MomentSection.module.css";

export function MomentSection() {
  return (
    <section className={styles.moment_section}>
      <h4 className={`text-3xl ${styles.title}`}>
        Encontre aulas para o seu momento
      </h4>

      <div className={styles.main_container}>
        <div className={styles.sub_container}>
          <div className={styles.text_container}>
            <h4 className={`H4 ${styles.sub_title}`}>
              Para quem nunca praticou
            </h4>
            <p className="text-md">
              Nunca teve contato com a prática e se sente insegura se está
              fazendo certo ou errado.
            </p>
          </div>

          <div className={styles.text_container}>
            <h4 className={`H4 ${styles.sub_title}`}>Intermediários</h4>
            <p className="text-md">
              Já domina as técnicas mas quer avançar ainda mais na sua prática
              pessoal.
            </p>
          </div>
        </div>

        <div className={styles.sub_container}>
          <img className={styles.img} src={accessImg}></img>
        </div>

        <div className={styles.sub_container}>
          <div className={styles.text_container}>
            <h4 className={`H4 ${styles.sub_title}`}>Iniciantes</h4>
            <p className="text-md">
              Praticou algumas vezes mas nunca conseguiu dar continuidade
            </p>
          </div>

          <div className={styles.text_container}>
            <h4 className={`H4 ${styles.sub_title}`}>Avançados</h4>
            <p className="text-md">
              Praticante há mais de 5 anos mas sente falta de ser guiado em sua
              prática pessoal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
