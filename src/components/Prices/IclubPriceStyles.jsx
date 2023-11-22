import styled from 'styled-components';

const BlackStyles = styled.div`
display: flex;
flex-direction: column;

.upperContainer {
  display: flex;
  width: 90%;
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
  opacity: 90%;
}

h4 {
  font-size: 42px;
}

.asterisk{
  position: relative;
  top: -15px;
  right: 0px;
  font-size: 15px;
}


@media screen and (max-width: 750px) {
  h4 {
    font-size: 36px;
  }
}

@media screen and (max-width: 700px) {
  h4 {
    font-size: 42px;
  }
}

@media screen and (max-width: 400px) {
  h4 {
    font-size: 38px;
  }

}

@media screen and (max-width: 370px) {
  h4 {
    font-size: 34px;
  }
}

@media screen and (max-width: 335px) {
  h4 {
    font-size: 30px;
  }
}
`;

export default BlackStyles;
