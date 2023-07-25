import styled from 'styled-components';

const SealContainer = styled.div`
  color: var(--C4);
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  display: flex;
  width: 100%;
  gap: 3.2rem;
  align-items: center;
  padding-bottom: 6rem;
  position: relative;


  .blur {
  background: var(--C2);
  border-radius: 60%;
  content: "";
  filter: blur(2.4rem);
  height: 100%;
  width: 70%;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  top: 0;
  z-index: -1;
}
  img {
    width: 19rem
  }

  p {
    max-width: 50rem;
    text-align: justify;
  }

// Tablet
@media screen and (max-width: 1127px) {
  .blur {
    width: 100%;
  }

  img {
    max-width: 50%;
  }

  p {
    max-width: 42rem;
  }
}

//Mobile
@media screen and (max-width: 744px) {
    p { 
      max-width: 100%;
    }
}
`;

export default SealContainer;
