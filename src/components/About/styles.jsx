import styled from 'styled-components';

const AboutContainer = styled.section`
background: var(--C2-50p);


.about-section  {
  color: var(--C4);
  display: flex;
  justify-content: space-between;
  margin: auto;
  flex-wrap: wrap;
  padding: 6rem 0;
  flex-direction: row;
}

.image {
  border-bottom: 1.6rem solid var(--C2);
  border-radius: 33.7rem 33.7rem 0 0;
  border-right: 1.6rem solid var(--C2);
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
  max-width: 50rem;
}

.text-container {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 3rem;
  justify-content: center;
  text-align: center;
  max-width: 50%;
}

.about-title {
  text-align: center;
}

.text-container p {

  text-align: center;
}

`;

const ContactContainer = styled.section`
color: var(--C4);
flex-direction: row;

.button {
  background: var(--C4);
  border: 3px solid transparent;
  border-radius: var(--radius-radius-full);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
}

.button:hover {
  background: var(--C2);
  border: 3px solid var(--C3);
  color: var(--C4);
}
`;

export { AboutContainer, ContactContainer };
