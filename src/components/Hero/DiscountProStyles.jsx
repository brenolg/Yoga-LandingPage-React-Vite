import styled from 'styled-components';

const ProContainerStyle = styled.div`
  position: absolute;
  top: 60px;
  left: -195px;
  height: 240px;
  color: var(--C1, #EFEFEF);
  width: 260px;
  border-radius: 50%;
  background: #0C2424;
  z-index: 1;

.proMonth {
  color: var(--C1, #EFEFEF);
  text-align: right;
  font-family: syne;
  font-size: 21px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.45px;
  padding-right: 10px;
  margin-top: -5px;
}

.proLine {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.proTitle {
  color: var(--C1, #EFEFEF);
  text-align: center;
  font-family: ivy;
  font-size: 47px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 1.5px;
  display: flex;
  margin-bottom: 5px;
  justify-content: space-between;
  padding-left: 500px;
}

.proTitle:first-child {
  padding-left: 16px;
}

.proTitleLast{
  padding-right: 5px;
}

.discountContainerPro {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
}

.proPrice {
  color: var(--C1, #EFEFEF);
  text-align: left;
  
  font-family: Syne;
  display: flex;
  flex-direction: column;
  font-size: 46px;
  font-style: normal;
  font-weight: 600;
  width: 90%;
  letter-spacing: -1px;
  position: relative;
}

.asterisk{
  position: absolute;
  top: 0;
  right: -7px;
  font-size: 15px;
}

.porDoze {
  flex: 1;
  align-self: flex-end;
  width: 100%;
}

.lineContainerPro {
  position: relative;
  color: var(--c-250, rgba(201, 211, 208, 0.50));
  text-align: right;
  font-family: syne;
  font-size: 16px;
  font-style: normal;
  display: flex;
  flex-direction: column;
  font-weight: 600;

}

.subContainer {
  width: 85%;
  margin: auto;
  margin-top: 12%;
  height: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media screen and (max-width: 1150px) {
    top: 24px;
    left: -10px; 
    height: 190px;
    width: 190px;

  .proTitle {
    max-width: 90%;
    margin: auto;
    font-size: 36px;
    margin-bottom: 0px;
  } 

  .proLine {
    width: 100%;
  }
      
  .proTitle:first-child {
    padding-left: 6px;
  }

  .proTitleLast{
    padding-right: 0px;
  }

  .discountContainerPro {
    font-size: 16px;
  }

  .lineContainerPro {
    font-size: 12px;
  }

  .proPrice {
    font-size: 34px;
  }

  .proMonth {
    font-size: 18px;
    padding-right: 0px;
  }

}
`;

export default ProContainerStyle;
