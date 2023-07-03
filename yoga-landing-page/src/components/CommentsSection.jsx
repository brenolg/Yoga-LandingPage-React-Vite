import after from "../images/afterIcon.svg";
import customer1 from "../images/customer1.png";
import prev from "../images/prevIcon.svg";
import styles from "./CommentsSection.module.css";

export function CommentsSection() {
  return (
    <section className={styles.access_section}>
      <h4 className={`text-3xl ${styles.title}`}>O que o alunos estão dizendo:</h4>

      <div className={styles.main_container}>
        <button className={styles.button}>
          <img className={styles.arrow_icon} src={prev} />
        </button>

        <div className={styles.text_container}>
          <img className={styles.reviewer_img} src={customer1} />
          <p className={`text-xs ${styles.review}`}>Comecei a fazer Yoga na pandemia e posso dizer que foi a melhor escolha que fiz. O Yoga me ajuda a estar mais presente no agora e assim acalmar a ansiedade do dia a dia. 🧘🏼‍♀️
As práticas me ensinam sobre o tempo de cada um, sobre apreciar a caminhada e não tentar correr pro final. Mas o que eu mais gosto é aproveitar essa conexão com meu corpo, conhecendo meus limites e me superando a cada dia. Posso dizer com tranquilidade que hoje estou o mais flexível de toda a vida e para uma pessoa toda encurtada isso é um grande feito 😅
Sem contar que a Bella é a melhor prof de todas né. Eu amo que além da parte prática, ela também nos ensina sobre a teoria do Yoga durante as meditações e os pranayamas. E a cada vídeo postado eu fico admirada com as habilidades dela o que me incentiva a continuar praticando pois sei que um dia eu também consigo chegar lá 😍</p>
        <span className="text-md">– Marina Lavalle</span>
        </div>

        <button className={styles.button}>
          <img className={styles.arrow_icon} src={after} />
        </button>
      </div>
    </section>
  );
}
