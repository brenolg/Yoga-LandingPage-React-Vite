import styled from 'styled-components';

const QuestionsCarrouselContainer = styled.section`
flex-shrink: 0;
height: 10.4rem;
margin: auto;
margin-top: 6rem;
margin-bottom: 6rem;
position: relative;
text-align: center;

.blur {
  background: var(--C2);
  border-radius: 118rem;
  content: "";
  filter: blur(27.5px);
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
}

.question_text {
  align-items: center;
  color: rgba(18, 57, 57, 0.8);
  display: flex;
  flex-shrink: 0;
  text-align: center;
  justify-content: center;
  margin: auto;
  width: ${(props) => (props.isMobile ? '100%' : '70%')};
  height: 100%;
  opacity: 0;
  transition: all 0.5s ease-in-out;
}

.translate {
  animation: slideIn 0.5s ease-in-out;
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(50%);
  }
  90% {
    opacity: 1;

  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.visible {
  opacity: 1;
  transition: all 0.5s ease-in-out;
}

.invisible {
  opacity: 0;
  transition: all 0.5s ease-in-out;
}
`;

export default QuestionsCarrouselContainer;
