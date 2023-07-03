import styles from "./QuestionsCarrousel.module.css";

export function QuestionsCarrousel() {
  return (
    <section className={styles.question_section}>
      <p className={`H3 ${styles.question_text}`}>
        Você perde a cabeça com mais frequência do que gostaria?
      </p>
    </section>
  );
}
