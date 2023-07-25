import styled from 'styled-components';
import yoga from '../../images/practiceYoga.png';

const ReviewsCarrouselContainer = styled.section`
color: var(--C4);
height: 100%;
margin: auto;
padding-top: 6rem;

h4 {
  text-align: left;
  align-items: flex-start;
}

.title {
  color: var(--C4);
  margin: auto;
  margin-bottom: 3.7rem;
  width: 112rem;
}

.main_container {
  align-items: center;
  background: linear-gradient(0deg,
  rgba(201, 211, 208, 0.5) 0%,
  rgba(201, 211, 208, 0.5) 100%),
  lightgray 50% / cover no-repeat;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url(${yoga});
  display: flex;
  padding: 3rem;
  justify-content: space-around;
  width: 100vw;  
  box-shadow: 0px 0px 4px 0 rgba(0, 0, 0, 0.15);
}

.button {
  background-color: var(--C4);
  border-radius: 100%;
  flex-shrink: 0;
  height: ${(props) => (props.isTabletAndMobile ? '4.6rem' : '6.4rem')};
  opacity: 0.7;
  position: relative;
  width: ${(props) => (props.isTabletAndMobile ? '4.6rem' : '6.4rem')};
}

.button:hover {
  opacity: 0.8;
  box-shadow: 0px 0px 4px 0 rgba(0, 0, 0, 0.3);
}

.button:active {
  scale: 0.98;
}

.arrow_icon {
  position: absolute;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);
}

.text_container {
  align-items: center;
  background: rgba(239, 239, 239, 0.85);
  border-radius: var(--radius-radius-rounded);
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: space-evenly;
  max-width: ${(props) => (props.isTabletAndMobile ? '85%' : '55%')};
  transition: all 0.4s ease-in-out;
  height: 52rem;
}

.review {
  background: rgba(201, 211, 208, 0.25);
  border-radius: var(--radius-radius-rounded);
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
  min-height: 28.8rem;
  padding: 1rem 1.8rem;
  text-align: justify;
  display: flex;
  margin: 1rem;
  flex-direction: column;
  justify-content: center;
}

.review p {
  padding-bottom: 1em;
}

.img-container {
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.reviewer-img {
  border: 2px solid var(--C3);
  border-radius: var(--radius-radius-full);
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.25);
  height: 8rem;
  width: 8rem;
}
`;

export default ReviewsCarrouselContainer;
