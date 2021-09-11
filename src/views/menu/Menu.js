import React from "react";
import MenuGrid, { MenuGridItem } from "./modules/MenuGrid";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Button } from "components/index";
import { BiBorderAll, BiDish, BiDrink } from "react-icons/bi";
import { FaPizzaSlice } from "react-icons/fa";
import { GiChickenOven } from "react-icons/gi";
import { IoFastFood } from "react-icons/io5";

import "./menu.scss";

export default function Menu({ menuDishes }) {
  return (
    <section className='menu'>
      <aside className='aside'>
        <div className='categories'>
          <h3>CATEGORY</h3>
          <ul className='categories__list'>
            <li className='categories__item active'>
              <span>
                <BiBorderAll />
              </span>
              <span>All</span>
            </li>
            <li className='categories__item'>
              <span>
                <FaPizzaSlice />
              </span>
              <span>Pizza</span>
            </li>
            <li className='categories__item'>
              <span>
                <IoFastFood />
              </span>
              <span>Sides</span>
            </li>
            <li className='categories__item'>
              <span>
                <GiChickenOven />
              </span>
              <span>Chicken</span>
            </li>
            <li className='categories__item'>
              <span>
                <BiDish />
              </span>
              <span>Deserts</span>
            </li>
            <li className='categories__item'>
              <span>
                <BiDrink />
              </span>
              <span>Drinks</span>
            </li>
          </ul>
        </div>
        <div className='price'></div>
      </aside>
      <div className='main'>
        <div className='main__header'>
          {/* <h2>
            <span>Our Menu</span>
          </h2> */}
          <h3>
            Food at your doorstep. <br />
            Your Hunger Partner, Straight out of the oven to your doorstep.
          </h3>
          <div className='view'>
            <div className='hr'></div>
            <Button label='Tasty' blk={true} />
          </div>
        </div>

        <MenuGrid>
          {menuDishes.map((item) => {
            return (
              <MenuGridItem key={item.id}>
                <div className='imgCon'>
                  <img src={item.img} alt='#' />
                </div>
                <ul className='ratings'>
                  <li className='ratings_star'>
                    <FaStar />
                  </li>
                  <li className='ratings_star'>
                    <FaStar />
                  </li>
                  <li className='ratings_star'>
                    <FaStar />
                  </li>
                  <li className='ratings_star'>
                    <FaStar />
                  </li>
                  <li className='ratings_star'>
                    {item.id % 2 === 0 ? <FaStar /> : <FaStarHalfAlt />}
                  </li>
                </ul>
                <div className='menuDetails'>
                  <h4>{item.name}</h4>
                  <p>{item.text}</p>
                  <p>&#8358; {item.price}</p>
                </div>
                <div className='add'>
                  <p>30min</p>
                  <Button label='Add to Cart' />
                </div>
              </MenuGridItem>
            );
          })}
        </MenuGrid>
      </div>
    </section>
  );
}
