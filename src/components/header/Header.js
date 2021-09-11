import React from "react";
import { Link } from "react-router-dom";
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
        <Link to='/' className='navList active'>
          <a href='#3'>Home</a>
        </Link>
        <Link to='/aboutus' className='navList'>
          <a href='#3'>About Us</a>
        </Link>
        <Link to='/menu' className='navList'>
          <a href='#3'>Our Menu</a>
        </Link>
        <Link to='/contact' className='navList'>
          <a href='#3'>Contact Us</a>
        </Link>
      </ul>
      <aside className='cart'>
        <Cart />
        <span className='cart__alert'>{1}</span>
      </aside>
    </nav>
  );
}
