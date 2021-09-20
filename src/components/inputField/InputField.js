import React, { forwardRef } from "react";
import "./inputField.scss";

// This input field is for text, email, password, textarea and number types
const InputField = forwardRef(
  (
    {
      type,
      placeholder,
      onChange,
      className,
      name,
      label,
      id,
      value,
      rows,
      cols,
      min,
      max,
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) {
        return onChange((prev) => ({
          ...prev,
          [e.target.name]: e.target.value || e.target.checked,
        }));
      }

      return null;
    };

    // useImperativeHandle(ref, () => {
    //   return {
    //     onChange: (e) => handleChange(e),
    //   };
    // });

    return (
      <div
        className={`formGroup ${
          type === "textarea" ? "formGroup--textarea" : "formGroup--input"
        }`}>
        {label && (
          <label htmlFor={id} className='formGroup__label'>
            {label}
          </label>
        )}
        {type === "textarea" ? (
          <textarea
            className='formGroup__textarea'
            onChange={handleChange}
            value={value}
            name={name}
            placeholder={placeholder}
            id={id}
            cols={cols}
            rows={rows}>
            {value}
          </textarea>
        ) : (
          <input
            ref={ref}
            type={type ? type : "text"}
            placeholder={placeholder ? placeholder : ""}
            onChange={handleChange}
            name={name ? name : ""}
            id={id ? id : null}
            value={value ? value : ""}
            className={`formGroup__input ${className}`}
            min={min}
            max={max}
          />
        )}
      </div>
    );
  }
);

export default InputField;
