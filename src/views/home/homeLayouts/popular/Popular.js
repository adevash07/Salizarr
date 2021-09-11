import React from "react";
import Button from "components/button/Button";
import Carousel, { CarouselItem } from "components/carousel/Carousel";
import "./popular.scss";

export default function Popular({ data }) {
  return (
    <section className='popular'>
      <h1>Popular Recipes</h1>
      <ul className='menu'>
        <li className='menuList'>
          <Button label='Pizza' active={true} />
        </li>
        <li className='menuList'>
          <Button label='Sides' />
        </li>
        <li className='menuList'>
          <Button label='Chicken' />
        </li>
        <li className='menuList'>
          <Button label='Deserts' />
        </li>
        <li className='menuList'>
          <Button label='Drinks' />
        </li>
      </ul>
      <Carousel width={20} loop={true} moveTime={2000} divide={4.5}>
        {data.map((pizza) => {
          return (
            <CarouselItem>
              <div className='imgCon'>
                <img src={pizza.img} alt='' />
              </div>
              <div className='nameTime'>
                <span>{pizza.name}</span>
                <span>{pizza.time}</span>
              </div>
              <p>{pizza.ingredient}</p>
              <p>{`${pizza.price}`}</p>
            </CarouselItem>
          );
        })}
      </Carousel>
      <div className='view'>
        <div className='hr'></div>
        <Button label='view All Recipes' blk={true} />
      </div>
    </section>
  );
}
