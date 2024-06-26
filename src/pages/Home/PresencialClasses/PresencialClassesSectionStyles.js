import styled from 'styled-components';

const PresencialClassesContainer = styled.section`
display: flex;
padding: 8px 76px var(--spacing-s3, 24px) 76px;
flex-direction: column;
align-items: flex-start;
gap: 8px;
position: relative;
.online-classes-title {
  color: var(--C4);
  font-family: syne, ivy, sans-serif;
  font-size: 3.5rem;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.1ch;
  line-height: 1.2em;
  position: relative;
  z-index: 99;
  margin-bottom: 1rem;
}
.online-classes-main-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}
.map-container {
  width: 50%;
  overflow: hidden;
  padding-right: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.map-container iframe {
  border-radius: 2.4rem;
  flex: 1 0 0;
}
.address-span {
  margin-top: 1.6rem;
  color: var(--C4, #123939);
  text-align: center;
  -webkit-text-stroke-width: 0.25;
  -webkit-text-stroke-color: var(--C4, #123939);
  font-family: syne;
  font-size: 13.5px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 148.148% */
  letter-spacing: 0.405px;
}
.card-main-container {
  padding-left: 1.2rem;
  display: flex;
  flex-direction: row;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 50%;
}
.divider {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 136px;
  transform: translateY(-50%);
}
@media (max-width: 1250px) {
  .online-classes-main-container {
    flex-direction: column;
    gap: 1.2rem;
  }
  .map-container {
    width: 100%;
    height: 204px;
  }
  .card-main-container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.6rem 2.4rem ;
    padding-left: 0;
  }
}
@media (max-width: 960px) {
  padding: 8px 32px var(--spacing-s3, 24px) 32px;
}
@media (max-width: 600px) {
  .card-main-container {
    grid-template-columns: 1fr;
    gap: 1.6rem;
  }
}
@media (max-width: 550px) {
  padding: 8px 16px;
    .online-classes-title {
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
  }
}

`;

export default PresencialClassesContainer;
