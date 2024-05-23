import styled from 'styled-components';
import backgroundImage from '../../images/homeHero.png';

const HeroContainer = styled.section`
width: 100%;
background-image: url(${backgroundImage});
padding-top: 6rem;
background-position: 50% 50%;
background-size: cover;
background-repeat: no-repeat;
padding-bottom: 12.4rem;
padding-left: 17.2rem;
position: relative;
.hero-card-home{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 4.4rem;
  padding-bottom: 5rem;
  padding-left: 4.8rem;
  padding-right: 4.8rem;
  width: fit-content;
  text-align: center;
  margin-right : auto;
  gap: 3.2rem;
  border-radius: 4.8rem;
  background-color: #EFEFEFBF;
  max-width:58.2rem;
}
.hero-card-title {
  color: var(--C4);
  font-family: ivy, syne, sans-serif;
  font-size: 3.6rem;
  font-style: normal;
  font-weight: 300;
  letter-spacing: 0.15ch;
  line-height: 1.5em;
}
.hero-card-paragraph-container {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}
.hero-card-paragraph {
  color: var(--C4);
  font-family: syne, sans-serif;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 530;
  letter-spacing: 0.15ch;
  line-height: 1.5em;
}
.divider {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 136px;
  transform: translateY(50%);
}
@media (max-width: 960px) {
  padding-left: 3.2rem;
  background-position: 40% 50%;
  background-size: cover;
  padding-top: 5.4rem;
  padding-bottom: 8.8rem;
  .hero-card-home{
    max-width: 41.9rem;
    padding-left: 3.2rem;
    padding-right: 3.2rem;
    padding-top: 3.2rem;
    padding-bottom: 3.6rem;
    gap: 2.4rem;
  }
  .hero-card-title {
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 32px; /* 128% */
    letter-spacing: 1.25px;
  }
  .hero-card-paragraph {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    letter-spacing: 0.32px;
  }
}
@media (max-width: 550px) {
  padding-left: 3.2rem;
  background-position: 70% 70%;
  background-size: 260%;
  padding-top: 1.8rem;
  padding-bottom: 8.1rem;
  padding-left: 0;
  .hero-card-home{
    max-width: 22.4rem;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    padding-top: 2.4rem;
    padding-bottom: 3.6rem;
    gap: 2.4rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .hero-card-title {
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px; /* 128% */
    letter-spacing: 1.25px;
    text-align: left;
  }
  .hero-card-paragraph {
    font-size: 13.5px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 148.148% */
    letter-spacing: 0.54px;
  }
@media (max-width: 400px) {
  background-position: 70% 70%;
  background-size: 290%;
}
@media (max-width: 380px) {
  background-position: 65% 80%;
  background-size: 270%;
}
}
`;

export default HeroContainer;
