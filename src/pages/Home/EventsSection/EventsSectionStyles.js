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
}
.events-card-main-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  z-index: 99;
}
.sub-card-text {
  margin-top: 0.8rem;
  width: 100%;
  text-align: center;
  color: var(--C4);
  font-family: ivy, sans-serif;
}
.divider-btn {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 136px;
  transform: translateY(50%);
}
`;

export { EventsSectionContainer };
