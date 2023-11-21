import styled from 'styled-components';

const BlackStyles = styled.div`
display: flex;
flex-direction: column;

.upperContainer {
  display: flex;
  width: 298px;
  justify-content: space-between;
  align-items: center;
}



.upperContainer .twelve{
  font-size: 18px;
  height: 100%;
  display: flex;
  align-items: flex-end;
}

.lineContainerPrice {
  font-size: 16px;
  display: flex;
  text-align: end;
  position: relative;
  flex-direction: column;
  color: var(--c-450, rgba(18, 57, 57, 0.50));
}

.linePrice {
  position: absolute;
  bottom: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, 50%);
  width: 100%;
}

h4 {
  font-size: 42px;
}



`;

export default BlackStyles;
