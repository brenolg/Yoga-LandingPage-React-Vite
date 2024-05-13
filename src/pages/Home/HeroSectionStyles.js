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
}
.hero-card-paragraph-container {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}
.hero-card-paragraph {
  color: var(--C4);
}
.divider {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 136px;
  transform: translateY(50%);
}
`;

export default HeroContainer;
