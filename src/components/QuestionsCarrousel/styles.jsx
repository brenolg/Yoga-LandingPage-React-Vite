import styled from 'styled-components';

const QuestionsCarrouselContainer = styled.section`
flex-shrink: 0;
margin-top: ${(props) => (props.ismobile ? '3rem' : '5rem')};
position: relative;
text-align: center;
height: 15rem;

.blur {
  background: var(--C2);
  border-radius: 50%;
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
  width: ${(props) => (props.istabletandmobile ? '100%' : '80%')};
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
