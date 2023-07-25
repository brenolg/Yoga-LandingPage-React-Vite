import PropTypes from 'prop-types';
import React from 'react';
import seal from '../../images/seal.svg';
import SealContainer from './styles';

export default function Seal({ isMobile }) {
  return (
    <SealContainer
      isMobile={isMobile}
      className="section-size"
      data-aos="fade"
      data-aos-easing="linear"
      data-aos-duration="1800"
    >
      <div className="blur" />
      <img src={seal} alt="seal" />
      <p className={isMobile ? 'text-sm' : 'text-md'}>
        Nos do Yoga iClub criamos o 15payback, que da a você 15 dias para solicitar
        seu reembolso sem questionamento ou burocracia alguma caso não esteja satisfeito
        com o produto.
      </p>
    </SealContainer>
  );
}

Seal.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
