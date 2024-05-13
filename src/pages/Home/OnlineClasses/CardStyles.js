import styled from 'styled-components';
import firstImage from '../../../images/iOne.png';
import secondImage from '../../../images/iTwo.png';
import thirdImage from '../../../images/iThree.png';
import fourthImage from '../../../images/iFour.png';
import fifthImage from '../../../images/iFive.png';
import sixthImage from '../../../images/iSix.png';
import seventhImage from '../../../images/iSeven.png';

const CardContainer = styled.div`
button:hover {
  opacity: 1;
}
button:active {
  transform: scale(1);
}
.event-front-card {
  position: relative;
  display: flex;
  height: 220px;
  width: 360px;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  border-radius: 2.4rem;
  background-size: cover;
}
.event-front-card.one {
  background-image: url(${firstImage});
}
.event-front-card.two {
  background-image: url(${secondImage});
}
.event-front-card.third{
  background-image: url(${thirdImage});
}
.event-front-card.fourth{
  background-image: url(${fourthImage});
}
.event-front-card.fifth {
  background-image: url(${fifthImage});
}
.event-front-card.sixth{
  background-image: url(${sixthImage});
}
.event-front-card.seventh {
  background-image: url(${seventhImage});
}
.sub-card-text {
  margin-top: 0.8rem;
  color: var(--C4);
  width: 100% ;
  text-align: center;
  font-family: ivy , syne, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
  letter-spacing: 1.2px;
}
.event-back-card {
  display: flex;
  height: 220px;
  width: 360px;
  padding-top: 2.8rem;
  padding-bottom: 3.2rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
  border-radius: 2.4rem;
  background: #8CA09A75;
  font-family: syne;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
}
.event-card-paragraph {
  font-family: syne, ivy, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  color: var(--C4, #123939);
}
.plus-img-container{
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

`;

const FlipCardFront = styled.button`
`;
const FlipCardBack = styled.button`
`;

export { FlipCardBack, FlipCardFront, CardContainer };
