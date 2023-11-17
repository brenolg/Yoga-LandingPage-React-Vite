import styled from 'styled-components';

const CarrouselContainer = styled.div`
  background: var(--C5);
  height: 80px; 
  max-width: 100vw;
  color: var(--C1, #EFEFEF);
  position: relative;
  overflow: hidden;
  
.carrouselInner {
  display: inline-block;
  white-space: nowrap;
  animation: scroll 26s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

span {
  font-family: Arial;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: uppercase;
}

svg {
  margin-bottom: 4px;
}
`;

export default CarrouselContainer;
