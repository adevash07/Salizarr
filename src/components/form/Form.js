import PropTypes from "prop-types";
import Button from "../button/Button";
import CheckBox from "../checkBox/CheckBox";
import InputDropdown from "../inputDropdown/InputDropdown";
import InputField from "../inputField/InputField";
import "./form.scss";

const handleFormData = (data, state, stateFunc) => {
  const newArray = [];
  const stateKeys = Object.keys(state);

  data.forEach((item) => {
    stateKeys.forEach((key) => {
      if (key === item.name) {
        item.value = state[key];
        item.onChange = stateFunc;
        newArray.push(item);
      }
    });

    if (item.name === "button") {
      newArray.push(item);
    }
  });

  return newArray;
};

const Form = ({
  data,
  state,
  stateFunc,
  width,
  height,
  maxWidth,
  maxHeight,
}) => {
  const newData = handleFormData(data, state, stateFunc);

  const mappedData = newData.map((item, key) => {
    if (item.type === "checkbox") {
      return <CheckBox key={key} {...item} />;
    }
    if (item.type === "dropdown") {
      return <InputDropdown key={key} {...item} />;
    }
    if (item.type === "submit" || item.name === "button") {
      return (
        <div key={key} className='formGroup formGroup--submit'>
          <Button {...item} type='submit' />
        </div>
      );
    }

    return <InputField key={key} {...item} />;
  });

  const formStyle = {};

  if (width) {
    formStyle.width = width;
  }

  if (height) {
    formStyle.height = height;
  }

  if (maxWidth) {
    formStyle.maxWidth = maxWidth;
  }

  if (maxHeight) {
    formStyle.maxHeight = maxHeight;
  }

  return (
    <form className='form' style={formStyle}>
      {mappedData}
    </form>
  );
};

Form.propTypes = {
  data: PropTypes.array,
  state: PropTypes.object,
  stateFunc: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
  maxWidth: PropTypes.string,
  maxHeight: PropTypes.string,
};

export default Form;
