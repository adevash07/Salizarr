import React, { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";
import "./carousel.scss";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className='carousel-item' style={{ width: width }}>
      {children}
    </div>
  );
};

export default function Carousel({
  children,
  width,
  onPause,
  control,
  indicator,
  loop,
  swipe,
  divide,
  moveTime,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };
  // HANDLER TO MAKE CAROUSEL SWIPEABLE
  const handler = useSwipeable({
    onSwipedLeft: () => swipe && updateIndex(activeIndex + 1),
    onSwipedRight: () => swipe && updateIndex(activeIndex - 1),
  });

  // USE EFFECT TO LOOP THE CAROUSEL
  useEffect(() => {
    const interval = setInterval(() => {
      if (!onPause && loop) {
        updateIndex(activeIndex + 1);
      }
    }, moveTime);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, onPause, loop, moveTime]);
  return (
    <div {...handler} className='carousel'>
      <div
        className={activeIndex === 0 ? "inner-0" : "inner"}
        style={{ transform: `translate(-${(activeIndex * width) / divide}%)` }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: `${width}%` });
        })}
      </div>
      {indicator && (
        <div className='indicators'>
          {React.Children.map(children, (child, index) => {
            return (
              <button
                className={`indicators__Buttons ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => {
                  updateIndex(index);
                }}></button>
            );
          })}
        </div>
      )}

      {control && (
        <>
          <span
            className='leftArrow'
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}>
            <FaAngleLeft />
          </span>
          <span
            className='rightArrow'
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}>
            <FaAngleRight />
          </span>
        </>
      )}
    </div>
  );
}
