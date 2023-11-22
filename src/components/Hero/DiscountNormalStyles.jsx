import styled from 'styled-components';

const ProContainerStyle = styled.div`
  position: absolute;
  bottom: 150px;
  right: -15px;
  height: 170px;
  color: var(--C1, #EFEFEF);
  width: 170px;
  border-radius: 50%;
  background: #123939;
  z-index: 1;

.proMonth {
  color: var(--C1, #EFEFEF);
  text-align: right;
  font-family: syne;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.45px;
  padding-right: 10px;
  margin-top: -5px;
}

.proLine {
  width:100%  ;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.proTitle {
  color: var(--C1, #EFEFEF);
  text-align: bottom;
  font-family: ivy;
  font-style: normal;
  font-weight: 400;
  margin-top  : 10px;
  letter-spacing: 1.5px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

}

.proTitle:first-child {
  padding-left: 6px;
  font-size: 36px;
  font-family: ivy;
}

.proTitleLast{
  font-size: 18px;
  text-align: bottom ;
  font-family: syne;
}

.discountContainerPro {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
}

.proPrice {
  color: var(--C1, #EFEFEF);
  text-align: left;
  font-family: syne;
  display: flex;
  flex-direction: column;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  width: 90%;
  letter-spacing: -1px;
  position: relative;
  padding-left: 3px;
}

.asterisk{
  position: absolute;
  top: 5px;
  right: 0px;
  font-size: 15px;
}

.porDoze {
  flex: 1;
  font-size: 12px;
  align-self: flex-end;
  padding-left: 5px;
  width: 100%;
  font-family: Syne;
}

.lineContainerPro {
  position: relative;
  color: var(--c-250, rgba(201, 211, 208, 0.50));
  text-align: right;
  font-family: Syne;
  font-size: 12px;
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

/* 
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
    font-size: 10px;
    padding-right: 0px;
  } */

}
`;

export default ProContainerStyle;
