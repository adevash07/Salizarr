import React, { useState, useRef, useContext } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { InputField } from "components/index";
import CartContext from "store/cartContext";
import "./menuGrid.scss";

export const MenuGridItem = ({ item }) => {
  // console.log(item.id);
  const cartCxt = useContext(CartContext);

  const [inputState, setinputState] = useState({ amt: 0 });
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    cartCxt.addItem({
      id: item.id,
      name: item.name,
      amount: enteredAmountNumber,
      img: item.img,
      price: item.price,
    });
  };

  return (
    <div key={item.id} className='grid__item'>
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
      <form className='add' onSubmit={submitHandler}>
        <InputField
          name='amt'
          label='Amt: '
          type='number'
          yel={true}
          className='amt'
          value={inputState.amt}
          onChange={setinputState}
          min='0'
          max='100'
          ref={amountInputRef}
          id={item.id}
        />
        <InputField
          name=''
          type='submit'
          value='Add to Cart'
          yel={true}
          className='yel'
        />
      </form>
    </div>
  );
};

export default function MenuGrid({ children }) {
  return <div className='grid'>{children}</div>;
}
