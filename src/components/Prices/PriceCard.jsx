import PropTypes from 'prop-types';
import React from 'react';
import BlackImg from './BlackImg';
import IclubAnualPrice from './IclubAnualPrice';
import IclubProPrice from './iClubProPrice';
import FirstLinePro from './FirsLinePro';
import FirstLineAnual from './FirstLineAnual';

export default function PriceCard({
  title, subTitle, price, list, link, isPremium, isTabletAndMobile, isMobile, isTablet, mensal,
}) {
  const handleAosDelay = () => {
    if (isPremium && !isTabletAndMobile) {
      return '0';
    }
    if (!isPremium && !isTabletAndMobile) {
      return '500';
    }
    return '0';
  };

  const handleClassName = () => {
    if (isPremium) {
      return 'premium card_container';
    }
    if (!isPremium && mensal) {
      return 'notPremium mensal card_container';
    }

    return 'notPremium anual card_container';
  };

  const handleMainPrices = () => {
    if (isPremium) {
      return <IclubProPrice />;
    }
    if (!isPremium && mensal) {
      return <h4 className="price">{price}</h4>;
    }

    return <IclubAnualPrice />;
  };

  const handleFirstLine = () => {
    if (isPremium) {
      return <FirstLinePro />;
    }
    if (!isPremium && mensal) {
      return null;
    }
    return <FirstLineAnual />;
  };

  const handleButtonTxt = () => {
    if (!isPremium && mensal) {
      return 'QUERO COMEÇAR';
    }

    return (
      <>
        <span className="buttonSpan">QUERO MEUS</span>
        <span className="buttonSpan"> 50% OFF</span>
      </>
    );
  };

  const handleSubTitleClass = () => {
    // Mobile
    if (isMobile) {
      if (isPremium) {
        return 'text-xl';
      }
      return 'text-2xl';
    }
    // Tablet
    if (isTablet) {
      if (isPremium) {
        return 'text-xl';
      }
      return 'text-3xl';
    }

    // Desktop
    if (isPremium) {
      return 'text-xl';
    }
    return 'text-3xl';
  };

  return (

    <div
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-delay={handleAosDelay()}
      data-aos-duration="1500"
      className={handleClassName()}
    >
      {isPremium && (
      <BlackImg />
      )}

      <div>

        <div className="title_container">
          <h1 className={`${isMobile ? 'H2' : 'H1'} price-title`}>{title}</h1>
          <h4 className={`${handleSubTitleClass()} price-sub-title`}>{subTitle}</h4>
        </div>

        {handleMainPrices()}

        <ul className="text-md list">

          {handleFirstLine()}

          {list.map((li, index) => (
            <li key={`${li} ${index}`}>
              {li}
            </li>
          ))}
        </ul>
      </div>

      <button className="Button button buttonCard " type="button">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {handleButtonTxt()}
        </a>
      </button>
    </div>

  );
}

PriceCard.propTypes = ({
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  isTabletAndMobile: PropTypes.bool.isRequired,
  isTablet: PropTypes.bool.isRequired,
  mensal: PropTypes.bool.isRequired,
});
