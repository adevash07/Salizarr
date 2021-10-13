import PropTypes from 'prop-types';
import './inputDropdown.scss';

// This input field is for select type (dropdown)
const InputDropdown = ({ name, id, data, placeholder, value, onChange }) => {
  const mappedData = data ? (
    data.map((item) => {
      return (
        <option
          className="formGroup__option"
          key={item.value}
          value={item.value}
        >
          {item.value}
        </option>
      );
    })
  ) : (
    <option className="formGroup__option" value="">
      No Option
    </option>
  );

  const handleChange = (e) => {
    if (onChange) {
      return onChange((prev) => ({
        ...prev,
        [e.target.name]: e.target.value || e.target.checked
      }));
    }

    return null;
  };

  return (
    <div className="formGroup formGroup--dropdown">
      <select
        value={value}
        onChange={handleChange}
        className="formGroup__select"
        name={name}
        id={id}
      >
        <option className="formGroup__option" value="">
          {placeholder ? placeholder : 'Please Select'}
        </option>
        {mappedData}
      </select>
    </div>
  );
};

InputDropdown.propTypes = {
  data: PropTypes.array,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string
};

export default InputDropdown;
