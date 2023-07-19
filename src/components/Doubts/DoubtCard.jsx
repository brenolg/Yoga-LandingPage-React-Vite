import PropTypes from 'prop-types';
import React from 'react';
import { DoubtCardStyles } from './styles';

export default function DoubtCard({ question, answer, isMobile }) {
  return (

    <DoubtCardStyles className="section-size">
      <h5 className={`${isMobile ? 'H6' : 'H5'} question`}>{question}</h5>
      <p className={`${isMobile ? 'text-md' : 'text-xl'} answer`}>{answer}</p>
    </DoubtCardStyles>
  );
}

DoubtCard.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired,
};
