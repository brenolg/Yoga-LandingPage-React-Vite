import styled from 'styled-components';

const SealContainer = styled.div`
  color: var(--C4);
  border-radius: 118rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  display: flex;
  width: 100%;
  gap: 3.2rem;
  align-items: center;
  padding-bottom: 3.2rem;

  img {
    margin: auto;
  }

  p {
    max-width: 70%;
    text-align: center;
  }

@media screen and (max-width: 744px) {
    p { 
      max-width: 100%;
    }
}


`;

export default SealContainer;
