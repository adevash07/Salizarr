import { React, useState, useRef, useLayoutEffect, useEffect } from "react";
import "../homeKitchen/kichen.scss";
import { ReactComponent as KitchenArena } from "../../../../images/kitchen/KitchenArena.svg";
import PropTypes from "prop-types";

export default function Kitchen({ ValueList }) {
  const [message, setmessage] = useState(1);
  const [animate, setanimate] = useState(false);
  const pizzaRef = useRef(null);
  //    LOGIC TO FOR TYPEWRITER ANIMATION IN HEADING    //////////////

  // startWriter.next();
  // for (let i = 0; i < length; i++) {
  //   setInterval(() => {
  //     startWriter.next();
  //     if (i === 3) {
  //       length = 3;
  //     }
  //   }, 10000);
  // }
  //    LOGIC TO FOR TYPEWRITER ANIMATION IN HEADING    //////////////
  const updateMessage = (num) => {
    if (num <= 3) {
      num += 1;
    } else if (num > 3) {
      num = 1;
    }
    setmessage(num);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      updateMessage(message);
    }, 5000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [message]);
  //    LOGIC TO FOR ANIMATE ON SCROLL //////////////
  useLayoutEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onScroll = () => {
    console.log("scroll");
    const topPos = pizzaRef.current.getBoundingClientRect().top;
  console.log(topPos);
    const scrollPos = window.scrollY + window.innerHeight;
    console.log(scrollPos);
    if (Math.sign(topPos) === 1) {
      setanimate(true);
    } else {
      setanimate(false);
    }
  };

  return (
    <section className='kitchen'>
      <div className='kitchen__Intro'>
        <h2 className='message'>
          {message === 1 && ValueList[0]}
          {message === 2 && ValueList[1]}
          {message === 3 && ValueList[2]}
        </h2>
        <h3>SELECT YOUR SIZE</h3>
        <div className='size'>
          <p className='size__sm'>
            <span>S</span>
          </p>
          <p className='size__md'>
            <span>M</span>
          </p>
          <p className='size__lg'>
            <span>L</span>
          </p>
        </div>
      </div>

      <div
        ref={pizzaRef}
        className={`kitchenArena ${animate ? "animate" : "unanimate"}`}>
        <KitchenArena />
      </div>
    </section>
  );
}

Kitchen.propTypes = {
  ValueList: PropTypes.array,
};
