import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { styled } from "styled-components";
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
    <QuestionsCarrouselContainer isMobile={isMobile}>
      <p
        className={`${isMobile ? "H5" : "H3"} ${isAnimating ? styles.translate : ""} ${isTextVisible ? styles.visible : styles.invisible}`}
        onAnimationEnd={() => setIsAnimating(false)}
      >
        {questionsArray[currentIndex]}
      </p>
    </QuestionsCarrouselContainer>
  );
}

const QuestionsCarrouselContainer = styled.div`
  flex-shrink: 0;
  height: 104px;
  margin: auto;
  margin-top: 6rem;
  margin-bottom: 24px;
  position: relative;
  text-align: center;
  width: 100%;
  max-width: 1128px;
  &:after {
    background: var(--C2);
    border-radius: 1180px;
    content: "";
    filter: blur(27.5px);
    height: 104px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  p {
    width: ${props => props.isMobile ? "100%" : "70%"};
    ${props => props.isMobile && "padding: 0px 16px;"}
    margin: auto;
    align-items: center;
    color: rgba(18, 57, 57, 0.8);
    display: flex;
    flex-shrink: 0;
    height: 100%;
  }
`