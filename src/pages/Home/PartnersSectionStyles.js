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
  margin-bottom: 1rem;
  color: var(--C4);
  font-family: syne, ivy, sans-serif;
  /* text-3xl */
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: 48px; /* 137.143% */
}
.partners-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 8rem;
  flex-wrap: wrap;
  gap: 1.6rem;
}
.divider-btn {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 136px;
  transform: translateY(50%);
}
.last-cta {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: none;
  gap: 1.6rem;
  padding-top: 2.4rem;
  color: var(--C4);
  position: relative;
  z-index: 99;
}
.last-cta span{
  font-family: Syne;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
  letter-spacing: 0.5px;
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
.last-btn {
  color: var(--C1, #EFEFEF);
  font-family: syne;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 15.953px; /* 113.951% */
  letter-spacing: 0.35px;
  text-align: center;
  min-width: 17.2rem;
}
@media (max-width: 960px) {
  padding: 8px 32px var(--spacing-s3, 24px) 32px;
}
@media (max-width: 550px) {
  padding: 8px 16px;
  padding-bottom: 1.6rem;
  .partner-title {
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
  }
  .last-cta {
      justify-content: space-between;
  }
  .last-cta span{
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px; /* 144.444% */
    letter-spacing: 0.36px;
    text-align: right;
  }
}
`;

export default PartnerSectionContainer;
