import styled from 'styled-components';

const HeaderContainer = styled.header`
background: var(--C2);
height: 9.6rem;
width: 100vw;
position: sticky;
top: 0;
z-index: 1;
box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.15);

.link {
  height: 100%;
  align-items: center;
  display: flex;
}

.headerNav {
  flex-direction: row;
  height: 100%;
  padding: 0 1.5rem;
}//1.5 de padding para não ficar colado no scroll da tela

.headerNav img {
  height: 52%;
}

.button_container {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: var(--spacing-xs);
  height: 100%;
  padding: var(--spacing-spacing-none);
}

.button {
  color: var(--C4);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: center;
}

.button:active {
  scale: 0.98;
}

/* Mobile */
@media screen and (max-width: 744px) {
  .button {
    display: none;
  }

  .headerNav{
    justify-content: center;
  }
}
`;

export default HeaderContainer;
