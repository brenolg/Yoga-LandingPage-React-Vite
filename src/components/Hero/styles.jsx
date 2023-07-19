import styled from 'styled-components';

const HeroContainer = styled.section`
  flex-direction: row;
  padding-bottom : 0;
`;

const TextContainerStyle = styled.div`
align-items: center;
color: var(--C4);
display: flex;
flex-direction: column;
flex-shrink: 0;
gap: var(--spacing-md);
justify-content: center;
padding: var(--spacing-none);
text-align: center;
width: 50%;

.main_title {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin: auto;
}

.main_text {
  padding-bottom: 1rem;
  margin: auto;
  max-width: 80%;
}

.button_container {
  align-items: center;
  display: flex;
  justify-content:center;
  flex-direction: column;
  flex-shrink: 0;
  gap: var(--spacing-xs);

}

.button {
  background: var(--C4);
  border: 0.3rem solid transparent;
  border-radius: var(--radius-radius-full);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  margin-bottom: 0.6rem;
  font-size: 1.8rem;
  font-weight: 950;
}

.button:hover {
  background-color: inherit;
  border: 0.3rem solid var(--C3);
  color: var(--C4);
}

.span {
  color: var(--C3);
  text-align: center;
  font-weight: 700;
}

@media screen and (max-width: 950px) {
  width: 100%;

  .main_title {
  max-width: 80%;
  }

  .main_text {
  max-width: 50%;
  }
}

@media screen and (max-width: 744px) {
  .main_text {
  max-width: 100%;
  }
  .main_title {
  max-width: 100%;
  }
}
`;

const ImageContainerStyle = styled.div`
display: flex;
flex-shrink: 0;
height: 65vh;
justify-content: flex-end;
padding-left: 7.5rem;

.outer_element {
  background: var(--C1);
  border-bottom: 1.6rem solid var(--C2);
  border-radius: 333px 333px 0 0;
  border-right: 1.6rem solid var(--C2);
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
  position: relative;
  width: 38.5rem;
  height: 100%;
}

.bela_img {
  bottom: 0;
  height: 100%;
  position: absolute;
  right: 0;
}

@media screen and (max-width: 950px) {
  padding-left: 0;
  width: 100%;
  padding-bottom: 3rem;

  .bela_img {
    height: 100%;
  }

  .outer_element {
    max-width: 95%;
  }

  width: 100%;
  justify-content: center;
}
`;

export { HeroContainer, ImageContainerStyle, TextContainerStyle };
