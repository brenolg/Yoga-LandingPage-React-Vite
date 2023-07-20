import styled from 'styled-components';

const FooterContainer = styled.div`
background: var(--C2);
color: var(--C4);
position: absolute;
height: var(--footer-height);
left: 0;
bottom: 0;
width: 100%;
height: 12rem;

.main_container {
  height: 100%;
  flex-direction: row;  
  align-items: center;
}

.scroll-main-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
}

.logo {
  max-height: 6rem;
  max-width: 45%;
}

.scroll-sub-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
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
  height: 8.8rem;
  
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
    max-width: 6rem;
  }
}
`;

export default FooterContainer;
