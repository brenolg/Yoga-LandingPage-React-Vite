import { useEffect, useState } from "react";
import questionsArray from "../utils/questionsArray";
import styles from "./QuestionsCarrousel.module.css";

export function QuestionsCarrousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTextVisible(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % questionsArray.length);
        setIsTextVisible(true);
        setIsAnimating(true);
      }, 500); // Tempo da animação de opacidade em milissegundos

      setTimeout(() => {
        setIsAnimating(false);
      }, 1000); // Tempo da animação de troca de pergunta em milissegundos
    }, 5000); // Intervalo de 5 segundos de execução da função

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.question_section}>
      <p
        className={`H3 ${styles.question_text} ${isAnimating ? styles.translate : ""} ${isTextVisible ? styles.visible : ""}`}
        onAnimationEnd={() => setIsAnimating(false)}
      >
        {questionsArray[currentIndex]}
      </p>
    </section>
  );
}
