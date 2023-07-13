import styled from 'styled-components';

const HeaderContainer = styled.header`
background: var(--C2);
height: 9.6rem;
width: 100vw;
position: sticky;
top: 0;
z-index: 1;
box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.15);

.headerNav {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-between;
  margin: auto;
}

.headerNav img {
  height: 75%;
  margin: 0.8rem 0 0;
}

.button_container {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: var(--spacing-spacing-xs);
  height: 96px;
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
