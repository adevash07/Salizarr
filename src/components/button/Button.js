import PropTypes from "prop-types";
import "./button.scss";

const Button = ({ label, onClick, type = "button", active, blk }) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }

    return null;
  };
  return (
    <button
      type={type}
      className={`button btn ${blk && "blk"}  ${active ? "active" : ""}`}
      onClick={handleClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  outline: PropTypes.any,
};

export default Button;
