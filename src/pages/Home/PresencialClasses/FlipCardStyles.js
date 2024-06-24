import styled from 'styled-components';
import firstImage from '../../../images/hathaYoga.png';
import secondImage from '../../../images/hotYoga.png';
import thirdImage from '../../../images/vinyasaYoga.png';
import fourthImage from '../../../images/yinYoga.png';

const EventFlipCard = styled.div`
button:hover {
  opacity: 1;
}
button:active {
  transform: scale(1);
}
.event-front-card {
  position: relative;
  display: flex;
  height: 208px;
  width: 264px;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  border-radius: 2.4rem;
  background-size: cover;
}
.event-front-card.first {
  background-image: url(${firstImage});
  background-position: center;
}
.event-front-card.second {
  background-image: url(${secondImage});
  background-position: center;
}
.event-front-card.third {
  background-image: url(${thirdImage});
  background-position: center;
}
.event-front-card.fourth{
  background-image: url(${fourthImage});
  background-position: center;
}
.sub-card-text {
  color: var(--C4);
  width: 100% ;
  text-align: center;
  font-family: ivy , syne, sans-serif;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 800;
  letter-spacing: 0.15ch;
  line-height: 1.5em;
}
.plus-img-container {
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  width: 52px;
  height: 52px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 0px 24px 0px 28px;
  background: var(--c-375, rgba(140, 160, 154, 0.75));
}
.event-back-card {
  display: flex;
  height: 208px;
  width: 264px;
  padding: 8px 8px 12px 8px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
  border-radius: 2.4rem;
  background: #8CA09A75;
}
.event-card-paragraph {
  font-family: syne, ivy, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  color: var(--C4, #123939);
}
.event-card-button {
  font-family: syne, ivy, sans-serif;
  display: flex;
  height : 3.2rem;
  width: 14.4rem;
  justify-content: center;
  align-items: center;
  border-radius: 360px;
  background: var(--C4, #123939);
  /* Sombra */
  box-shadow: 0px 2px 3px 0px rgba(37, 37, 37, 0.10);
  border: 1px solid var(--C4, #1E8689);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 15.953px; /* 113.951% */
  letter-spacing: 0.35px;
  color: var(--C1, #EFEFEF);
}
.event-card-button:hover {
  background: transparent;
  border: 1px solid var(--C4, #1E8689);
  color: var(--C4, #1E8689);
}
@media (max-width: 1250px) {
  .event-back-card {
    width: 100%;
  }
  .event-front-card {
    width: 100%;
  }
}
`;

const FlipCardFront = styled.button`
`;
const FlipCardBack = styled.button`
`;

export { FlipCardBack, FlipCardFront, EventFlipCard };
