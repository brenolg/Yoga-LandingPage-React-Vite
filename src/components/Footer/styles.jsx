import styled from 'styled-components';

const FooterContainer = styled.div`
background: var(--C2);
color: var(--C4);
position: absolute;
height: var(--footer-height);
left: 0;
bottom: 0;
width: 100%;

.main_container {
  height: 100%;
  flex-direction: row;  
  align-items: center;
  padding: 0 1.5rem;
}

.scroll-main-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
}

.link {
  height: 100%;
  align-items: center;
  display: flex;
  max-width: 45%;
}

.logo {
  max-height: 6rem;
}

.scroll-sub-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
}

.social-links img{
  width: 5rem;
}

.scroll-sub-container > * {
  color: var(--C4);
}

@media screen and (max-width: 1127px) {
  .main_container {
  padding: 0 4.5rem;
  }
}

/* Mobile */
@media screen and (max-width: 800px) {  
  .main_container {
    justify-content: center;
  }

  .scroll-main-container {
    display: none;
  }

  .main_container {
    padding: 0;
  }

  .social-links {
    width: 50%;
  }

  .social-links img{
    width: 30%;
    max-height: 100%;
  }
}
`;

export default FooterContainer;
