import React from 'react';
import ProContainerStyle from './DiscountNormalStyles';
import line from '../../images/Line.svg';

export default function DiscountNormal() {
  return (
    <ProContainerStyle
      className="proMainContainer"

    >

      <div className="subContainer">

        <span className="proTitle">
          <span>iClub</span>
          <span className="proTitleLast">anual</span>
        </span>

        <div className="discountContainerPro">
          <span className="porDoze">
            por 12x
          </span>
          <div className="lineContainerPro">
            <img src={line} alt="line" className="proLine" />
            <span>de 12x</span>
            <span>R$ 180,00/mês</span>

          </div>
        </div>
        <span className="proPrice">
          <span>R$ 90,00</span>
          <span className="proMonth">por mês</span>

          <spa className="asterisk ">*</spa>

        </span>
      </div>

    </ProContainerStyle>

  );
}
