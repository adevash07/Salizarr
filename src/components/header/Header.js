import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/header/logo.svg";
import { ReactComponent as Cart } from "../../images/header/Cart.svg";
import CartContext from "store/cartContext";
import "./header.scss";

export default function Header({ onCart }) {
  const cartContent = useContext(CartContext);
  const numberCartContent = cartContent.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);
  return (
    <nav className='header'>
      <aside className='conLogo'>
        <Logo />
      </aside>
      <ul className='nav'>
        <NavLink to='/' className='navList'>
          Home
        </NavLink>
        <NavLink to='/aboutus' className='navList'>
          About Us
        </NavLink>
        <NavLink to='/menu' className='navList'>
          Our Menu
        </NavLink>
        <NavLink to='/contact' className='navList'>
          Contact Us
        </NavLink>
      </ul>
      <aside className='cart' onClick={() => onCart()}>
        <Cart />
        {numberCartContent !== 0 && (
          <span className='cart__alert'>{cartContent.items.length}</span>
        )}
      </aside>
    </nav>
  );
}
