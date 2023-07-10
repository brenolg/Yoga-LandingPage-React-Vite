import PropTypes from 'prop-types';
import { useRef, useState } from "react";
import after from "../../images/afterIcon.svg";
import prev from "../../images/prevIcon.svg";
import reviewsArray from "../../utils/reviewsArray";
import styles from "./ReviewsCarrousel.module.css";

export function ReviewsCarrousel({device}) {
  const [index, setIndex] = useState(0);

  const transition = useRef();

  const turnInvisible = async () => {
    transition.current.className = ` invisible ${styles.text_container}`;
  };

  const turnVisible = async () => {
    transition.current.className = ` visible ${styles.text_container}`;
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
    <section className={styles.comment_section} id="students">
      <h4 className={`text-3xl ${styles.title}`}>O que o alunos estão dizendo:</h4>

      <div className={styles.main_container} 
      data-aos="fade"
      data-aos-easing="linear"
      data-aos-duration="1500"
      >
        <button 
        className={styles.button}
        onClick={handleLeftArrow}
        >
        <img className={styles.arrow_icon} src={prev} />
        </button>

        <div className={styles.text_container}>
          <div className={styles.text_container} ref={transition} >
            <img className={styles.reviewer_img} src={reviewsArray[index].img} />
            <div className={`text-xs ${styles.review}`}>
            {reviewsArray[index].review.map((r) => (
              <p className={`${styles.techsSpan}`} key={r}>
                {r}
              </p>
            ))}
            </div>
            <span className="text-md">{`- ${reviewsArray[index].name}`}</span>
          </div>
        </div>

        <button 
        className={styles.button}
        onClick={handleRightArrow}>
          <img className={styles.arrow_icon} src={after} />
        </button>
      </div>
    </section>
  );
}

ReviewsCarrousel.propTypes = ({
  device: PropTypes.string.isRequired,
});
