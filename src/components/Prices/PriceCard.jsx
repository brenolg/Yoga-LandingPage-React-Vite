import PropTypes from 'prop-types';
import React from 'react';

export default function PriceCard({
  title, subTitle, price, list, link, isPro,
}) {
  return (

    <div
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-duration="1500"
      className={`${isPro ? 'premium' : 'notPremium'} card_container`}
    >

      <div>
        <div className="title_container">
          <h1 className="price-title">{title}</h1>
          <h4 className="text-xl">{subTitle}</h4>
        </div>

        <h4 className="price">{price}</h4>

        <ul className="text-md list">
          {list.map((li) => (
            <li key={li}>
              {li}
            </li>
          ))}
        </ul>
      </div>

      <button className="Button button " type="button">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          quero começar
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
  isPro: PropTypes.bool.isRequired,
});
