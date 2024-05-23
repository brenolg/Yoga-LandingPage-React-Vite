import styled from 'styled-components';
import firstImage from '../../../images/yogaNoParque.png';
import secondImage from '../../../images/natureYoga.png';
import thirdImage from '../../../images/iceYoga.png';

const EventFlipCard = styled.div`
button:hover {
  opacity: 1;
}
button:active {
  transform: scale(1);
}
.event-front-card {
  padding: 1rem;
  border: none;
  width: 36rem;
  height: 36rem;
  border-radius: 2.4rem;
  background-size: cover;
}
.event-front-card.first {
  background-image: url(${firstImage});
}
.event-front-card.second {
  background-image: url(${secondImage});
}
.event-front-card.third {
  background-image: url(${thirdImage});
}
.event-back-card {
  background: var(--C2);
  font-family: syne, ivy, sans-serif;
  color: var(--C4);
  padding: 1rem;
  border: none;
  width: 36rem;
  height: 36rem;
  border-radius: 2.4rem;
  padding: var(--spacing-s3, 24px) 16px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.text-paragraph-container {
  gap: 1rem;
  display: flex;
  flex-direction: column;
}
.event-card-paragraph {
  font-family: syne, ivy, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0.27px;
  text-align: justify;
  gap: 30rem;
}
.destaque-span {
  text-align: justify;
  font-family: syne, ivy, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 144.444% */
  letter-spacing: 0.27px;
}
.event-card-button {
  font-family: syne, ivy, sans-serif;
  border-radius: var(--radius-radius-full, 360px);
  color: var(--C1, #EFEFEF);
  background: var(--C4, #123939);
  /* Sombra */
  box-shadow: 0px 2px 3px 0px rgba(37, 37, 37, 0.10);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.5px;
  height: 4.7rem;
  width: 20.8rem;
  border: 2px solid transparent;
}
.event-card-button:hover {
  background: transparent;
  border: 1px solid var(--C4, #1E8689);
  color: var(--C4, #1E8689);
}
@media (max-width: 825px) {
  .event-front-card {
    width: 328px;
  }
  .event-back-card {
    width: 328px;
  }
}
@media (max-width: 740px) {
  .event-front-card {
    width: 100%;
  }
  .event-back-card {
    width: 100%;
  }
}
@media (max-width: 395px) {
  .event-front-card {
    height: 39rem;
  }
  .event-back-card {
    height: 39rem;
  }
}
@media (max-width: 350px) {
  .event-front-card {
    height: 41rem;
  }
  .event-back-card {
    height: 41rem;
  }
}
`;

const ThirdFlipCardStyle = styled(EventFlipCard)`
@media (max-width: 1265px) {
  margin-left: 50%;
  transform: translateX(-50%);
}
@media (max-width: 740px) {
  margin-left: 0;
  transform: translateX(0%);
}
`;
const FlipCardBack = styled.button`
`;

export { FlipCardBack, ThirdFlipCardStyle, EventFlipCard };
