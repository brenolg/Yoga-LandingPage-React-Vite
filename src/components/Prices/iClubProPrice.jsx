import React from 'react';
import BlackStyles from './IclubPriceStyles';
import line from '../../images/LinePrice.png';

export default function IclubProPrice() {
  return (

    <BlackStyles className="price">

      <div className="upperContainer">
        <span className="twelve">por 12x</span>

        <div className="lineContainerPrice">
          <img src={line} alt="linePrice" className="linePrice" />
          <span>de 12x</span>
          <span>R$ 180,00/mês</span>
        </div>
      </div>

      <h4>R$ 90,00/mês<spa className="asterisk ">*</spa></h4>
    </BlackStyles>

  );
}
