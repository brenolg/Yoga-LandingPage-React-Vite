import styled from 'styled-components';

const HeaderContainer = styled.header`
width: calc(100vw -1rem);
padding-top: 1.6rem;
padding-bottom: 1.6rem;
position: sticky;
top: 0;
z-index: 100;
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 7.6rem;
padding-right: 7.6rem;
background: var(--C2);
.logo-header-home {
  width: 141.882px;
  height: 3.6rem;
}
.link-header {
  color: var(--C4, #123939);
  font-family: Syne;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
  letter-spacing: 0.5px;
  cursor: pointer;
}
@media (max-width: 960px) {
  padding-left: 9.2rem;
  padding-right: 9.2rem;
  .desktop-links {
    display: none;
  }
}
@media (max-width: 550px) {
  justify-content: center;
  .link-header {
    display: none;
  }
  
}
`;

export default HeaderContainer;
