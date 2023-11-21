import React from 'react';
import BlackStyles from './IclubPriceStyles';
import line from '../../images/LinePrice.png';

export default function IclubAnualPrice() {
  return (

    <BlackStyles className="price">

      <div className="upperContainer">
        <span className="twelve">por 12X</span>

        <div className="lineContainerPrice">
          <img src={line} alt="linePrice" className="linePrice" />
          <span>de 12X</span>
          <span>R$ 39,90/mês</span>
        </div>
      </div>

      <h4>R$ 19,95/mês</h4>
    </BlackStyles>

  );
}
