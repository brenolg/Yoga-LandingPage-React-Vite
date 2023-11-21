import React from 'react';
import BlackStyles from './IclubPriceStyles';
import line from '../../images/LinePrice.svg';

export default function IclubProPrice() {
  return (

    <BlackStyles className="price">

      <div className="upperContainer">
        <span className="twelve">por 12X</span>

        <div className="lineContainerPrice">
          <img src={line} alt="linePrice" className="linePrice" />
          <span>de 12X</span>
          <span>R$ 180,00/mês</span>
        </div>
      </div>

      <h4>R$ 90,00/mês</h4>
    </BlackStyles>

  );
}
