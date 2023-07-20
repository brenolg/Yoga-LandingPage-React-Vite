import styled from 'styled-components';

const PillarsContainer = styled.section`
color: var(--C4);
width: 100%;
height: 100%;

.pillars_container {
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  padding-right: 0;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  width: 100%;
  height: 100%;
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
height: 100%;

.pillar_img {
  border-bottom: 1.6rem solid var(--C2);
  border-radius: 33.7rem 33.7rem 0 0;
  border-right: 1.6rem solid var(--C2);
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
  width: 100%;
  margin: auto;
}
//altura da imagem nao funfa body um pouco menor que as outras
`;

export { PillarCardStyles, PillarsContainer };
