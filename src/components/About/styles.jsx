import styled from 'styled-components';

const AboutContainer = styled.section`
background: var(--C2-50p);
color: var(--C4);

.about-section  {
  display: flex;
  justify-content: space-between;
  margin: auto;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 3rem;
}

.img-container {
  width: 45%;
}

.image {
  border-bottom: 1.6rem solid var(--C2);
  border-radius: 33.7rem 33.7rem 0 0;
  border-right: 1.6rem solid var(--C2);
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
  max-width: 50rem;
  width: 100%;
}

.text-container {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 3rem;
  justify-content: center;
  text-align: center;
  width: 45%;
}

.about-title {
  text-align: center;
}

.text-container p {
  text-align: center;
}

/* Mobile */
@media screen and (max-width: 800px) {
  .about-section  {
    flex-direction: column;
  }

  .img-container {
    width: 100%;
  }

  .image {
    max-width: 100%;
  }

  .text-container {
    width: 100%;
  }
}
`;

const ContactContainer = styled.section`
color: var(--C4);
flex-direction: row;
padding-bottom: 3.7rem;

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

@media screen and (max-width: 744px) {
  flex-direction: column;
  text-align: center;
  gap: 2rem;
}
`;

export { AboutContainer, ContactContainer };
