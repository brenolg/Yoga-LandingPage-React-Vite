import React, { useRef, useState } from 'react';
import after from '../../images/afterIcon.svg';
import prev from '../../images/prevIcon.svg';
import reviewsArray from '../../utils/reviewsArray';
import ReviewsCarrouselContainer from './styles';

export default function ReviewsCarrousel() {
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
    <ReviewsCarrouselContainer id="students">
      <h4 className="text-3xl title">O que o alunos estão dizendo:</h4>

      <div
        className="main_container"
        data-aos="fade"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <button
          className="button"
          onClick={handleLeftArrow}
          type="button"
        >
          <img className="arrow_icon" src={prev} alt="arow" />
        </button>

        <div className="text_container" ref={transition}>
          <img className="reviewer_img" src={reviewsArray[index].img} alt="avatar" />
          <div className="text-xs review">
            {reviewsArray[index].review.map((r) => (
              <p className="techsSpan" key={r}>
                {r}
              </p>
            ))}
          </div>
          <span className="text-md">{`- ${reviewsArray[index].name}`}</span>
        </div>

        <button
          className="button"
          onClick={handleRightArrow}
          type="button"
        >
          <img className="arrow_icon" src={after} alt="avatar" />
        </button>
      </div>
    </ReviewsCarrouselContainer>
  );
}
