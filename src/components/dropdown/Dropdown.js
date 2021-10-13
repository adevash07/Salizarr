// import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import "./dropdown.scss";
const Dropdown = ({
  header,
  state,
  stateFunc,
  onClick,
  content,
  border,
  id,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
    if (stateFunc) {
      return stateFunc(id);
    }
    return null;
  };
  return (
    <div className='dropdown'>
      <div
        className={`dropdown__header ${state && "active"} ${
          border && "borderemove"
        }`}
        onClick={handleClick}>
        <span>{header}</span>
        <FiChevronDown />
      </div>
      {content && (
        <div className={`dropdown__contact ${state && "active"}`}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
