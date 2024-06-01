import React from 'react';
import PartnersSectionContainer from './PartnersSectionStyles';
import iWanna from '../../images/iWanna.svg';
import bolixe from '../../images/bolixe.svg';
import Logodeuzzaroxa from '../../images/Logodeuzzaroxa.svg';
import FELICITEA from '../../images/FELICITEA.svg';
import gotaRoxa from '../../images/gotaRoxa.svg';
import hidratei from '../../images/hidratei.svg';
import climb from '../../images/climb.svg';
import bass from '../../images/bass.png';
import piracanga from '../../images/piracanga.svg';
import plantapra from '../../images/plantapra.svg';
import farm from '../../images/farm.svg';
import gili from '../../images/gili.svg';
import divider from '../../images/DIVISOR.png';

function PartnersSection() {
  return (
    <PartnersSectionContainer id="contatos">
      <h1 className="partner-title">Parceiros</h1>
      <div className="partners-container">
        <img src={iWanna} alt="Parceiro" />
        <img src={bolixe} alt="Parceiro" />
        <img src={Logodeuzzaroxa} alt="Parceiro" />
        <img src={FELICITEA} alt="Parceiro" />
        <img src={gotaRoxa} alt="Parceiro" />
        <img src={hidratei} alt="Parceiro" />
        <img src={climb} alt="Parceiro" />
        <img src={bass} alt="Parceiro" />
        <img src={piracanga} alt="Parceiro" />
        <img src={plantapra} alt="Parceiro" />
        <img src={farm} alt="Parceiro" />
        <img src={gili} alt="Parceiro" />
      </div>
      <div className="last-cta ">
        <span>Para parcerias entre em contato:</span>
        <a
          href="https://api.whatsapp.com/send/?phone=5531996793158"
          target="_blank"
          rel="noopener noreferrer"
          className="last-btn"
        >
          converse comigo
        </a>
      </div>
      <img src={divider} alt="divider" className="divider-btn" />

    </PartnersSectionContainer>
  );
}

export default PartnersSection;
