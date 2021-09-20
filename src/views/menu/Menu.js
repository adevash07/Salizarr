import MenuGrid, { MenuGridItem } from "./modules/MenuGrid";
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
            return <MenuGridItem key={item.id} item={item}></MenuGridItem>;
          })}
        </MenuGrid>
      </div>
    </section>
  );
}
