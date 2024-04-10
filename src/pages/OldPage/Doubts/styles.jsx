import styled from 'styled-components';

const DoubtsContainer = styled.section`
  color: var(--C4);

.main_container {
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
}
`;

const DoubtCardStyles = styled.div`
align-items: flex-start;
background: var(--C2-50p);
border-radius: var(--radius-radius-rounded);
box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
display: flex;
flex-direction: column;
flex-shrink: 0;
gap: 2.4rem;
justify-content: space-between;
padding: 1.6rem 0;
width: 100%;

.question {
  background: var(--C2);
  padding: 1rem 3.2rem;
  width: 100%;
}

.answer {
  padding: 0 3.2rem;
  width: 100%;
}
`;

export { DoubtCardStyles, DoubtsContainer };
