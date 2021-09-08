import React from "react";
import { ReactComponent as Logo } from "../../images/header/logo.svg";
import { ReactComponent as Cart } from "../../images/header/Cart.svg";
import "./header.scss";

export default function header() {
  return (
    <nav className='header'>
      <aside className='conLogo'>
        <Logo />
      </aside>
      <ul className='nav'>
        <li className='navList active'>
          <a href='#3'>Home</a>
        </li>
        <li className='navList'>
          <a href='#3'>About Us</a>
        </li>
        <li className='navList'>
          <a href='#3'>Our Menu</a>
        </li>
        <li className='navList'>
          <a href='#3'>Contact Us</a>
        </li>
      </ul>
      <aside className='cart'>
        <Cart />
      </aside>
    </nav>
  );
}
