import React from "react";
import "./cartGridItem.scss";

export const CartGridItem = ({ children }) => {
  return <div className='cartGrid__item'>{children}</div>;
};
export default function CartGrid({ children }) {
  return <div className='cartGrid'>{children}</div>;
}
