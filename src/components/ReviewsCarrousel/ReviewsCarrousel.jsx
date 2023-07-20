import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import after from '../../images/afterIcon.svg';
import prev from '../../images/prevIcon.svg';
import reviewsArray from '../../utils/reviewsArray';
import ReviewsCarrouselContainer from './styles';

export default function ReviewsCarrousel({ isTabletAndMobile, isMobile }) {
  const [index, setIndex] = useState(0);

  const transition = useRef();

  const turnInvisible = async () => {
    transition.current.className = ' invisible text_container';
  };

  const turnVisible = async () => {
    transition.current.className = ' visible text_container';
  };

  const handleLeftArrow = async () => {
    await turnInvisible();
    setTimeout(async () => {
      if (index > 0) {
        setIndex(index - 1);
      } else {
        setIndex(reviewsArray.length - 1);
      }
    }, 350);
    setTimeout(async () => {
      await turnVisible();
    }, 400);
  };

  const handleRightArrow = async () => {
    await turnInvisible();
    setTimeout(async () => {
      if (index < reviewsArray.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 350);
    setTimeout(async () => {
      await turnVisible();
    }, 400);
  };
  return (
    <ReviewsCarrouselContainer isTabletAndMobile={isTabletAndMobile} id="students">
      <h4 className={`section-size section-main-title ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
        O que o alunos estão dizendo:
      </h4>

      <div
        className="main_container"
        data-aos="fade"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        {!isTabletAndMobile && (
        <button
          className="button"
          onClick={handleLeftArrow}
          type="button"
        >
          <img className="arrow_icon" src={prev} alt="arow" />
        </button>
        )}

        <div className="text_container" ref={transition}>

          <div className="img-container">

            {isTabletAndMobile && (
            <button
              className="button"
              onClick={handleLeftArrow}
              type="button"
            >
              <img className="arrow_icon" src={prev} alt="arow" />
            </button>
            )}
            <img className="reviewer-img" src={reviewsArray[index].img} alt="avatar" />

            {isTabletAndMobile && (
            <button
              className="button"
              onClick={handleRightArrow}
              type="button"
            >
              <img className="arrow_icon" src={after} alt="avatar" />
            </button>
            )}

          </div>

          <div className="text-xs review">
            {reviewsArray[index].review.map((r) => (
              <p key={r}>
                {r}
              </p>
            ))}
          </div>
          <span className="text-md">{`- ${reviewsArray[index].name}`}</span>
        </div>

        {!isTabletAndMobile && (
        <button
          className="button"
          onClick={handleRightArrow}
          type="button"
        >
          <img className="arrow_icon" src={after} alt="avatar" />
        </button>
        )}

      </div>
    </ReviewsCarrouselContainer>
  );
}

ReviewsCarrousel.propTypes = ({
  isTabletAndMobile: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
});
