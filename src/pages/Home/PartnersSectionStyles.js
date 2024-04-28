import styled from 'styled-components';

const PartnerSectionContainer = styled.section`
width: 100%;
background: var(--C2);
padding-left: 7.6rem;
padding-right: 7.6rem;
padding-bottom: 3.2rem; 
position: relative;
.partner-title {
  color: var(--C4);
}
.partners-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 8rem;
  flex-wrap: wrap;
}
.divider{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height:  13.6rem;
  background-repeat: no-repeat;
  z-index: 1;
  transform: translateY(50%);
}
.last-cta {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.6rem;
  padding-top: 2.4rem;
  color: var(--C4);
}
.last-cta a{
  padding: 0.9rem 1.6rem ; 
  background: var(--C4);
  border-radius: 2.4rem;
  font-weight: 500;
  letter-spacing: 0.25ch;
  color: var(--C2);
  font-size: 1.4rem;
  transition: all  0.3s;
  border: 1px solid transparent;
}
.last-cta a:hover{
  background: var(--C5);
  border: 1px solid var(--C4);
  color: var(--C4);
}
`;

export default PartnerSectionContainer;
