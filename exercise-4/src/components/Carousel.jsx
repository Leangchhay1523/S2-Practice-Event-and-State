import React from "react";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const [curImgIndex, setCurImgIndex] = useState(0)

  /* You will need to hanle the click on left and right button */
  const handleRightClick = () => {
    if (curImgIndex === images.length - 1) {
      setCurImgIndex(0)
    }
    else {
      setCurImgIndex(curImgIndex => curImgIndex + 1)
    }
  }

  const handleLeftClick = () => {
    if (curImgIndex === 0) {
      setCurImgIndex(images.length -1)
    }
    else {
      setCurImgIndex(curImgIndex => curImgIndex - 1)
    }
  }

  /* You will need to manage the cases when we are on the last image or first image*/

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handleLeftClick}/>

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={images[curImgIndex].src} alt={images[curImgIndex].alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleRightClick}/>
    </div>
  );
};
