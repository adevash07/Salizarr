import Button from "components/button/Button";
import Carousel, { CarouselItem } from "components/carousel/Carousel";
import Overlay from "components/overlay/Overlay";
import { contentImg, contentImg2 } from "images/image";
import { grid1, grid2, grid3, grid4, grid5, grid6 } from "images/image";
import React from "react";
import "./content.scss";

export default function Content() {
  return (
    <>
      <section className='content'>
        <div className='taste'>
          <div className='tasteText'>
            <h1>Your Taste Buds Will Be Transformed.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit ut
              adipisci asperiores deserunt sunt ducimus vel ad qui doloremque
              molestiae cumque voluptates aliquam, voluptatibus consequatur
              nihil unde tempore fugit fuga. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Sit ut adipisci asperiores deserunt
              sunt ducimus vel ad qui doloremque molestiae cumque voluptates
              aliquam, voluptatibus consequatur nihil unde tempore fugit fuga.
            </p>
            <Button blk={true} label='Order Now' />
          </div>

          <div className='tasteImg'>
            <Carousel width={200} loop={true} divide={4.1} moveTime={8000}>
              <CarouselItem>
                <img src={contentImg} alt='#' />
              </CarouselItem>
              <CarouselItem>
                <img src={contentImg2} alt='#' />
              </CarouselItem>
            </Carousel>
          </div>
        </div>
      </section>
      <section className='pizza'>
        <h2>Our Customer Moments</h2>
        <h3>
          Salizarr has got the perfect dish for every moment, checkout some of
          our customer Salizarr moments.
        </h3>
        .
        <div className='pizza__Grid'>
          <div className='pizzaGrid__item1'>
            <img src={grid1} alt='grid' />
          </div>
          <div className='pizzaGrid__item2'>
            <img src={grid2} alt='grid' />
          </div>
          <div className='pizzaGrid__item3'>
            <img src={grid3} alt='grid' />
          </div>
          <div className='pizzaGrid__item4'>
            <img src={grid4} alt='gird' />
          </div>
          <div className='pizzaGrid__item5'>
            <img src={grid5} alt='grid' />
          </div>
          <div className='pizzaGrid__item6'>
            <img src={grid6} alt='grid' />
          </div>
          <Overlay />
        </div>
      </section>
    </>
  );
}
