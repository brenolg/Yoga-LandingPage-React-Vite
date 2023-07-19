import styled from 'styled-components';

const AccessContainer = styled.section`
background: var(--C2-50p);

.access_section {
  color: var(--C4);
}

.main_container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  gap: 3rem;
  margin: auto;
}
`;

const AccessCardStyles = styled.section`
align-items: center;
background: var(--C2);
border-radius: 1.6rem;
flex-shrink: 0;
padding: 1rem 1.3rem;
text-align: center;
max-width: 20%;
padding-bottom: 2rem;
margin-bottom: 6rem;
border-radius: 1.6rem;

img {
  width: 100%;
  margin-bottom:2rem;
  border-radius: 1rem;
}

/* Tablet */
@media screen and (max-width: 1127px) {
max-width: 35%;
margin: auto;
margin-bottom: 3rem;
}
/* Mobile */
@media screen and (max-width: 744px) {
max-width: 75%;
margin-bottom: 1.6rem;
}
`;

export { AccessCardStyles, AccessContainer };
