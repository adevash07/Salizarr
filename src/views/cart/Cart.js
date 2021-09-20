import { Button, Overlay } from "components/index";
import React, { useContext } from "react";
import { createPortal } from "react-dom";
import CartGrid, { CartGridItem } from "./modules/CartGrid";
import { TiTimes } from "react-icons/ti";
// import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import "./cart.scss";
import CartContext from "store/cartContext";
const port = document.getElementById("overlayPort");
createPortal(<Cart />, port);

export default function Cart({ onCart }) {
  const cartCxt = useContext(CartContext);
  return (
    <Overlay className='cartOverlay'>
      <section className='cartSection'>
        <div className='cartSection__con'>
          <ul className='cartSection__nav'>
            <li className='cartSection__nav__item'>Salizarr</li>
            <li onClick={() => onCart()} className='cartSection__nav__item'>
              <TiTimes />
            </li>
          </ul>
          <h1 className='cartSection__header'>
            Salizarr<span>.</span>
          </h1>
          <h4 className='cartSection__subHeading'>
            <span>subtotal:</span>
            <span>{}</span>
          </h4>
          <CartGrid>
            {cartCxt.items.map((elem) => {
              const totalPrice = elem.amount * elem.price;
              return (
                <CartGridItem key={Number(elem.id) * parseInt(Math.random)}>
                  <div className='imgCon'>
                    <img src={elem.img} alt='img' />
                  </div>
                  <div>
                    <p>
                      <span>Name: </span>
                      <span>{elem.name}</span>
                    </p>
                    <p>
                      <span>Amount: </span>
                      <span>{elem.amount}</span>
                    </p>
                    <p>
                      <span>price: </span>
                      <span>{totalPrice}</span>
                    </p>
                  </div>
                  <div className='add'>
                    <Button
                      label='add +1'
                      yel={true}
                      onClick={cartCxt.addItem({
                        id: elem.id,
                        amount: 1,
                      })}></Button>
                    {/* <Button
                      label='remove -1'
                      yel={true}
                     onClick={cartCxt.removeItem({
                        id: elem.id,
                        amount: -1,
                     })}>
                    </ Button> */}
                  </div>
                  {/* <ul className='ratings'>
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
                      {elem.id % 2 === 0 ? <FaStar /> : <FaStarHalfAlt />}
                    </li>
                  </ul> */}
                </CartGridItem>
              );
            })}
          </CartGrid>
          <div className='cartSection__footer'>
            <ul className='cartSection__footer__list'>
              <li className='cartSection__footer__item'></li>
              <li className='cartSection__footer__item'></li>
              <li className='cartSection__footer__item'></li>
            </ul>
          </div>
        </div>
      </section>
    </Overlay>
  );
}
