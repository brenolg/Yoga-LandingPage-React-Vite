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
}

.scroll-main-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
}

.logo {
  height: 55%;
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
`;

export default FooterContainer;
