import styled from 'styled-components';

const HeroContainer = styled.section`
align-items: center;
display: flex;
flex-direction: row;
height: 100%;
justify-content: space-between;
margin: 0 auto 6rem;
padding-top: 3vh;
flex-wrap: wrap;
`;

const TextContainerStyle = styled.div`
align-items: center;
color: var(--C4);
display: flex;
flex-direction: column;
flex-shrink: 0;
gap: var(--spacing-spacing-md);
justify-content: center;
padding: var(--spacing-spacing-none);
text-align: center;
width: 50%;
padding-bottom: 3rem;

.main_title {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

.main_text {
  max-width: 75%;
  padding-bottom: 1rem;
  margin: auto;
}

.button_container {
  align-items: center;
  display: flex;
  justify-content:center;
  flex-direction: column;
  flex-shrink: 0;
  gap: var(--spacing-spacing-xs);
  height: 9.6rem;
}

.button {
  background: var(--C4);
  border: 0.3rem solid transparent;
  border-radius: var(--radius-radius-full);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  margin-bottom: 0.6rem;
  font-size: 1.8rem;
  padding: 1rem 2rem;
  font-weight: 950;
  letter-spacing: 0.2ch;
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

@media screen and (max-width: 850px) {
  width: 100%;
}
`;

const ImageContainerStyle = styled.div`
display: flex;
flex-shrink: 0;
height: 65vh;
width: 45%;
justify-content: center;
padding-bottom: 3rem;

.outer_element {
  background: var(--C1);
  border-bottom: 16px solid var(--C2);
  border-radius: 333px 333px 0 0;
  border-right: 16px solid var(--C2);
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
  position: relative;
  width: 385px;
}

.bela_img {
  bottom: 0;
  height: 100%;
  position: absolute;
  right: 0;
}

@media screen and (max-width: 850px) {
  gap: 2rem;
  width: 100%;

  .bela_img {
    height: 90%;
  }
}

${(props) => props.isMobile && `
  .bela_img {
    height: 100%;
  }

  .outer_element {
    max-width: 95%;
  }

  width: 100%;
  justify-content: center;
`
}
`;

export { HeroContainer, ImageContainerStyle, TextContainerStyle };
