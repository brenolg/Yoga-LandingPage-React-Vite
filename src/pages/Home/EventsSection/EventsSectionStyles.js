import styled from 'styled-components';

const EventsSectionContainer = styled.section`
display: flex;
justify-content: flex-start;
flex-direction: column;
padding-left: 7.6rem;
padding-right: 7.6rem;
gap: 1.6rem;
padding-bottom: 3.2rem;
position: relative;
.title {
  color: var(--C4);
  margin-bottom: 1rem;
  color: var(--C4);
  font-family: syne, ivy, sans-serif;
  /* text-3xl */
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: 48px; /* 137.143% */
}
.events-card-main-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  z-index: 99;
  gap: 1.6rem;
  width: 100%;
}
.sub-card-text {
  margin-top: 0.8rem;
  width: 100%;
  text-align: center;
  color: var(--C4);
  font-family: ivy, sans-serif;
  font-family: ivy , syne, sans-serif;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 800;
  letter-spacing: 0.15ch;
  line-height: 1.5em;
}
.divider-btn {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 136px;
  transform: translateY(50%);
}

@media (max-width: 960px) {
    padding: 8px 32px var(--spacing-s3, 24px) 32px;
}

@media (max-width: 740px) {
  .events-card-main-container{
  display: grid;
  grid-template-columns: 1fr;
}
}
@media (max-width: 550px) {
  padding: 8px 16px;
    .title {
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    }
}

`;

export default EventsSectionContainer;
