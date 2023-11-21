import React from 'react';
import BlackImage from '../../images/LinePrice.svg';
import BlackStyle from './FirstLineStyle';

export default function FirstLineAnual() {
  return (

    <BlackStyle>
      De

      <span className="lineSpan">
        R$478,80
        <img className="fistLineLine" src={BlackImage} alt="line" />
      </span>

      por R$239,40

    </BlackStyle>

  );
}
