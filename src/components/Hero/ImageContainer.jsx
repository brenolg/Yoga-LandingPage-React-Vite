import React from 'react';
import { ImageContainerStyle } from './styles';
import belaBlack from '../../images/heroBlack.png';
import ProDiscount from './DiscountPro';
import DiscountNormal from './DiscountNormal';

export default function ImageContainer() {
  return (
    <ImageContainerStyle
      className="img_container"
      data-aos="fade"
      data-aos-easing="linear"
      data-aos-duration="1800"
    >
      <div className="outer_element">

        <ProDiscount />

        <DiscountNormal />
        <img className="bela_img" src={belaBlack} alt="bela-img" />
      </div>
    </ImageContainerStyle>

  );
}
