import styled from 'styled-components';

const PillarsContainer = styled.section`
align-items: center;
color: var(--C4);
display: flex;
flex-direction: column;
margin: auto;
padding-top: 6rem;
margin-bottom: 6rem;
width: 100%;

.title { 
  margin-right: auto;
  margin-bottom: 3.7rem;
}

.pillars_container {
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  padding-right: 0;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  width: 100%;
}

@media screen and (max-width: 1127px) {
  .pillars_container {
    justify-content: space-around;
    gap: 3rem;
  }
}
`;

const PillarCardStyles = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
gap: 1.6rem;
width: 28rem;

.pillar p {
  line-height: 2ch;
  line-height: 2.2ch;
}

.pillar_img {
  border-bottom: 1.6rem solid var(--C2);
  border-radius: 33.7rem 33.7rem 0 0;
  border-right: 1.6rem solid var(--C2);
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
  width: 100%;
  margin: auto;
  margin-bottom: 1.2rem;
}
`;

export { PillarCardStyles, PillarsContainer };
