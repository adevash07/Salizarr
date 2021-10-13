import PropTypes from 'prop-types';
import './checkBox.scss';

const CheckBox = ({ value, onChange, label, id, name = '' }) => {
  const handleChange = (e) => {
    if (onChange) {
      return onChange((prev) => ({
        ...prev,
        [e.target.name]:
          e.target.type === 'checkbox' ? e.target.checked : e.target.value
      }));
    }

    return null;
  };

  return (
    <div className="formGroup formGroup--checkbox">
      <input
        defaultChecked={value}
        type="checkbox"
        name={name}
        onChange={handleChange}
        className="formGroup__input"
        value={value}
        id={id}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

CheckBox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string
};

export default CheckBox;
