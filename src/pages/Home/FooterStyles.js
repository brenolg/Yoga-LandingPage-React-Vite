import styled from 'styled-components';

const FooterContainer = styled.footer`
width: 100%;
padding-top: 1.6rem;
padding-bottom: 1.6rem;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
padding-top: 2rem;
padding-bottom: 2rem;
background: var(--C4);
padding-left: 7.6rem;
padding-right: 7.6rem;
z-index: 99;

.footer-nav  {
  display: flex;
  gap: 2rem;
  padding: 0.4rem;
}
.footer-button img {
  width: 4rem;
  height: 4rem;
}
.footer-logo {
  width: 20.1rem;
  height: 5.1rem;
}
`;

export default FooterContainer;
