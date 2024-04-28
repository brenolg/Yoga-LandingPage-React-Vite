import React from 'react';
import OnlineClassesContainer from './OnlineClassesSectioStyles';
import divider from '../../images/DIVISOR.png';

function OnlineClassesSection() {
  return (
    <OnlineClassesContainer>
      <h1 className="online-classes-title H3">Aulas Online</h1>
      <img className="divider" src={divider} alt="text" />
    </OnlineClassesContainer>
  );
}

export default OnlineClassesSection;
