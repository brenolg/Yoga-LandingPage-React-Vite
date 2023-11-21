import styled from 'styled-components';

const HeaderContainer = styled.header`
  opacity: ${(props) => (props.scrolled ? '1' : '0')};
  background: var(--C5);
  height: 130px;
  width: 100vw;
  bottom: 0;
  position: sticky;
  top: 0;
  z-index: 99;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  transition: all ease-in-out 0.5s;

.subContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 1120px;
}

.yogaText {
  display:flex;
  flex-direction: column;
}

span {
  color: var(--C1, #EFEFEF);
  font-family: Arial;
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: 24px; /* 120% */
  letter-spacing: 1px;
  text-transform: uppercase;
}

button {
  font-family: Arial;
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: 24px; /* 120% */
  letter-spacing: 1px;
  text-transform: uppercase;
  display: flex;
  width: 227px;
  color: #123939;
  height: 56px;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-s-1, 8px);
  flex-shrink: 0;
  border-radius: var(--radius-radius-full, 360px);
  background: var(--C1, #EFEFEF);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  max-width: 40%;
}

.button a {
  width: 100%;
  display: flex;
  color: #123939;
  color: var(--C5);
  flex-direction: column;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.button span {
  color: #123939;
}

img {
  max-width: 40%;
}

@media screen and (max-width: 740px) {
  .button {
    display: none;
  }
}
`;

export default HeaderContainer;
