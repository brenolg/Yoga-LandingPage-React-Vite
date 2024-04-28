import styled from 'styled-components';

const OnlineClassesContainer = styled.section`
height: 6.4rem;
background: var(--C2);
position: relative;
.online-classes-title {
  z-index: 99;
  position: absolute ;
  top: 0.8rem;
  left: 7.6rem;
}
.divider {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height:  13.6rem;
  background-repeat: no-repeat;
  z-index: 1;
  transform: translateY(-50%);
}
`;

export default OnlineClassesContainer;
