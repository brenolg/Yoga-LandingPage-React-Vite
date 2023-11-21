import React from 'react';
import BlackImage from '../../images/LinePrice.svg';
import BlackStyle from './FirstLineStyle';

export default function FirstLinePro() {
  return (

    <BlackStyle>
      De

      <span className="lineSpan">
        R$2.160,00
        <img className="fistLineLine" src={BlackImage} alt="line" />
      </span>

      por R$1.080,00

    </BlackStyle>

  );
}
