import styled from 'styled-components';

const MomentContainer = styled.section`
color: var(--C4);

.main-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 3rem;
  width: 100%;
}

.sub-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 3rem;
  max-width: 30%;
}

.img {
  border-bottom: 1.6rem solid var(--C2);
  border-radius: 33.3rem 33.3rem 0 0;
  border-right: 1.6rem solid var(--C2);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  max-width: 100%;
}

/* Tablet */
@media screen and (max-width: 1000px) {
  .main-container {
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  }

  .sub-container {
    max-width: 100%;
  }
}
`;

const TextCardStyles = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: var(--spacing-md);
flex-shrink: 0;
text-align: center;
width: 100%;

.sub-title {
  background: var(--C2);
  border-radius: var(--radius-radius-full);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  width: 100%;
  padding: 0.5em 0.5em;
}

@media screen and (max-width: 1000px) {
  max-width: 100%;
}
`;

export { MomentContainer, TextCardStyles };
