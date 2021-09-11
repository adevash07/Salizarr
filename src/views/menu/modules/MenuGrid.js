import React from "react";
import "./menuGrid.scss";

export const MenuGridItem = ({ children }) => {
  return <div className='grid__item'>{children}</div>;
};

export default function MenuGrid({ children }) {
  return <div className='grid'>{children}</div>;
}
