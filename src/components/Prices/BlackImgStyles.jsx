import styled from 'styled-components';

const BlackStyles = styled.img`
position: absolute;
right: -40px;
top: -105px;
width: 247.487px;
height: 152.675px;
z-index: 99;

@media screen and (max-width: 1127px) {
  right: -90px;
}

@media screen and (max-width: 1000px) {
  right: -120px;
  transform: rotate(-4.714deg);
  top: -95px;
}

@media screen and (max-width: 850px) {
  right: -230px;
  top: -105px;
}

@media screen and (max-width: 750px) {
  display: none;
}

`;

export default BlackStyles;
